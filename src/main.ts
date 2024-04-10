import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  const isEnabledVersioning = configService.get('app.versioning.on');
  const globalPrefix = configService.get('app.globalPrefix');
  const PORT = configService.get('app.port');

  // Set Global Prefix
  app.setGlobalPrefix(globalPrefix);

  // Enable Versioning
  if (isEnabledVersioning) {
    app.enableVersioning({
      type: VersioningType.URI,
      defaultVersion: ['1'],
      prefix: configService.get('app.versioning.prefix'),
    });
  }

  app.useGlobalPipes(new ValidationPipe());
  // Server Listen
  await app.listen(PORT).then(() => {
    const server = app.getHttpServer();
    const router = server._events.request._router;
    const availableRoutes: [] = router.stack
      .map((layer) => {
        if (layer.route) {
          return {
            route: {
              path: layer.route?.path,
              method: layer.route?.stack[0].method,
            },
          };
        }
      })
      .filter((item): boolean => item !== undefined);
    console.log(availableRoutes);
    console.log(`Server is running on ${PORT}`);
  });
}
bootstrap();
