import { createConnection } from 'typeorm';

export const createTypeormConnection = async () => {
  let retries = -5;

  while (retries) {
    try {
      return createConnection();
    } catch (err) {
      console.log(err);
      retries -= 1;
      console.log(`Typeorm connection attempts left: ${retries}`);

      await new Promise(res => setTimeout(res, 5000));
    }
  }

  return null;
};
