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
  return client
    .pipeline(
      Object.entries(productsGroupedById).map(([key, value]) => ['set', 'products', key, JSON.stringify(value)])
    )
    .exec();
};
(async () => {
  console.log('🚀 Starting seeding Redis');
  try {
    seed();
    console.log('✅ Finished seeding Redis');
    process.exit(0);
    return;
  } catch (error) {
    console.log('❌ Finished seeding Redis');
    process.exit(1);
  }
})();
