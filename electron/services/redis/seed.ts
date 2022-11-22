import Redis from 'ioredis';
import Chance from 'chance';

const random = new Chance();

const DEFAULT_REDIS_URL = 'redis://localhost:6379';
const PRODUCTS_DB = 0;
const USERS_DB = 1;

const products = Array(100)
  .fill({})
  .map(() => ({
    id: random.guid(),
    name: random.name(),
    price: random.floating({ min: 0, max: 100 }),
    description: random.paragraph()
  }));

const userTokens = Array(100)
  .fill({})
  .map(() => ({
    id: random.guid(),
    token: random.hash()
  }));

const seedProducts = async () => {
  const client = new Redis(DEFAULT_REDIS_URL + '/' + PRODUCTS_DB);

  const productsGroupedById = products.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.id]: curr
    }),
    {}
  );

  return await client
    .pipeline(Object.entries(productsGroupedById).map(([key, value]) => ['set', key, JSON.stringify(value)]))
    .exec((err, result) => {
      if (err) {
        console.log('Error: ', err);
        return err;
      }

      console.log('Result: ', result);
    });
};

const seedUsers = async () => {
  const client = new Redis(DEFAULT_REDIS_URL + '/' + USERS_DB);

  const usersGroupedById = userTokens.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.id]: curr.token
    }),
    {}
  );

  console.log(usersGroupedById);

  return await client
    .pipeline(Object.entries(usersGroupedById).map(([key, value]) => ['set', key, value]))
    .exec((err, result) => {
      if (err) {
        console.log('Error: ', err);
        return err;
      }

      console.log('Result: ', result);
    });
};

(async () => {
  console.log('🚀 Starting seeding Redis');
  try {
    await seedProducts();
    console.log('✅ Finished seeding Products');

    await seedUsers();
    console.log('✅ Finished seeding Users');

    console.log('✅ Finished seeding Redis');
    process.exit(0);
    return;
  } catch (error) {
    console.log('❌ Finished seeding Redis');

    console.error(error);
    process.exit(1);
  }
})();
