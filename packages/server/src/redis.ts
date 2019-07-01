import * as Redis from 'ioredis';

export const redis =
  process.env.NODE_ENV === 'production' ? new Redis(6379, process.env.REDDIS_HOST) : new Redis();
