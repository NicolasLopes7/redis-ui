import Redis from 'ioredis';

const DEFAULT_REDIS_URL = 'redis://localhost:6379';

const products = [];

const seed = async () => {
  const client = new Redis(DEFAULT_REDIS_URL);
};

(async () => {
  await seed();
})();
