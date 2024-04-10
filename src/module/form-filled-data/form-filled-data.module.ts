import { Module } from '@nestjs/common';
import { FormFilledDataController } from './controller/form-filled-data.controller';
import { FormFilledDataService } from './service/form-filled-data.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormFilledDataEntity } from './entiry/form-filled-data.entity';
import { FormFilledModule } from '../form-filled/form-filled.module';
import { FormModule } from '../form/form.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([FormFilledDataEntity]),
    FormFilledModule,
    FormModule,
  ],
  controllers: [FormFilledDataController],
  providers: [FormFilledDataService],
})
export class FormFilledDataModule {}
