import { Module } from '@nestjs/common';
import ConfigModule from '../config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('database.mysql.host'),
        port: configService.get('database.mysql.port'),
        username: configService.get('database.mysql.username'),
        password: configService.get('database.mysql.password'),
        database: configService.get('database.mysql.database'),
        entities: [__dirname + '/../**/*.entity.js'],
        synchronize: configService.get('database.mysql.alterTable'),
        autoLoadEntities: true,
        retryAttempts: 1,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class CoreModule {}
