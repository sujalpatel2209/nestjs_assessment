import { FormModule } from '../module/form/form.module';
import { DynamicModule, Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { FormFilledDataModule } from '../module/form-filled-data/form-filled-data.module';

const appRoutes = [
  {
    path: 'form',
    module: FormModule,
  },
  {
    path: 'fill_data',
    module: FormFilledDataModule,
  },
];

@Module({})
export class AppRouterModule {
  static register(): DynamicModule {
    return {
      module: AppRouterModule,
      imports: [
        ...appRoutes.map((item) => item.module),
        RouterModule.register(appRoutes),
      ],
    };
  }
}
