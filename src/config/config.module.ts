import { ConfigModule } from '@nestjs/config';
import config from './index';

export default (() => {
  return ConfigModule.forRoot({
    load: config,
    isGlobal: true,
    cache: true,
    envFilePath: ['.env'],
  });
})();
