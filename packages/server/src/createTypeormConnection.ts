import { createConnection, getConnectionOptions } from 'typeorm';

export const createTypeormConnection = async () => {
  let retries = 5;

  while (retries) {
    try {
      const config = await getConnectionOptions(process.env.NODE_ENV);
      const secureConfig = {
        ...config,
        name: 'default',
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
      };
      return createConnection(secureConfig);
    } catch (err) {
      console.log(err);
      retries -= 1;
      console.log(`Typeorm connection attempts left: ${retries}`);

      await new Promise(res => setTimeout(res, 5000));
    }
  }

  return null;
};
