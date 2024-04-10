import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FormFilledEntity } from '../entity/form-filled.entiry';
import { Repository } from 'typeorm';
import { CreateFormFilledDTO } from '../dto/formFilledDTO';

@Injectable()
export class FormFilledService {
  constructor(
    @InjectRepository(FormFilledEntity)
    private readonly formFilledRepository: Repository<FormFilledEntity>,
  ) {}

  async createFormFilled(
    createFormFilledDTO: CreateFormFilledDTO,
  ): Promise<FormFilledEntity> {
    const { form_id } = createFormFilledDTO;
    return await this.formFilledRepository.save(
      this.formFilledRepository.create({
        form_id: form_id,
      }),
    );
  }
}
