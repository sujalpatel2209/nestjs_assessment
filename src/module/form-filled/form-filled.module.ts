import { Module } from '@nestjs/common';
import { FormFilledService } from './service/form-filled.service';
import { FormFilledEntity } from './entity/form-filled.entiry';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FormFilledEntity])],
  providers: [FormFilledService],
  exports: [FormFilledService],
})
export class FormFilledModule {}
