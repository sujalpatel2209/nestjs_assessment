import { registerAs } from '@nestjs/config';

export default registerAs(
  'app',
  (): Record<string, string | number | boolean | object> => ({
    env: process.env.NODE_ENV || 'local',
    port: process.env.APP_PORT || 3001,
    versioning: {
      on: process.env.APP_VERSIONING === 'true' || true,
      prefix: 'v',
    },
    globalPrefix: 'api',
  }),
);
