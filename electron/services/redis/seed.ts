import Redis from 'ioredis';
import Chance from 'chance';

const productRandomData = new Chance();

const DEFAULT_REDIS_URL = 'redis://localhost:6379';

const products = Array(100)
  .fill({})
  .map(() => ({
    id: productRandomData.guid(),
    name: productRandomData.name(),
    price: productRandomData.floating({ min: 0, max: 100 }),
    description: productRandomData.paragraph()
  }));

const seed = async () => {
  const client = new Redis(DEFAULT_REDIS_URL);

  const productsGroupedById = products.reduce((acc, curr) => ({
    ...acc,
    [curr.id]: curr
  }));
  await client.set('products', 'aaa');

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
(async () => {
  console.log('🚀 Starting seeding Redis');
  try {
    await seed();
    console.log('✅ Finished seeding Redis');
    process.exit(0);
    return;
  } catch (error) {
    console.log('❌ Finished seeding Redis');
    process.exit(1);
  }
})();
