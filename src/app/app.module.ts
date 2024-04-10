import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { AppRouterModule } from './app.router';

@Module({
  imports: [CoreModule, AppRouterModule.register()],
})
export class AppModule {}
