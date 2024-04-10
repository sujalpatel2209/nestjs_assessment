import { Module } from '@nestjs/common';
import { FormController } from './controller/form.controller';
import { FormService } from './service/form.service';
import { FormEntity } from './entity/form.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormFieldModule } from '../form-field/form-field.module';

@Module({
  imports: [TypeOrmModule.forFeature([FormEntity]), FormFieldModule],
  controllers: [FormController],
  providers: [FormService],
  exports: [FormService],
})
export class FormModule {}
