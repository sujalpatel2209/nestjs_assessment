import { registerAs } from '@nestjs/config';

export default registerAs(
  'database',
  (): Record<string, string | number | boolean | object> => ({
    mysql: {
      type: process.env.DB_TYPE || 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 3006,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'node_assignment',
      alterTable: process.env.DB_ALTER_TABLE || false,
    },
  }),
);
