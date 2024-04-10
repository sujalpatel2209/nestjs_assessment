import { forwardRef, Module } from '@nestjs/common';
import { FormFieldService } from './service/form-field.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormFieldEntity } from './entiry/form-field.entity';
import { FormModule } from '../form/form.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([FormFieldEntity]),
    forwardRef(() => FormModule),
  ],
  providers: [FormFieldService],
  exports: [FormFieldService],
})
export class FormFieldModule {}
