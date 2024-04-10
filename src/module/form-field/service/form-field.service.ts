import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FormFieldEntity } from '../entiry/form-field.entity';
import { Repository } from 'typeorm';
import { FormField } from '../../form/interface/form.interface';
import { CreateFormFieldDTO } from '../dto/createFormFieldDTO';

@Injectable()
export class FormFieldService {
  constructor(
    @InjectRepository(FormFieldEntity)
    private readonly formFieldRepository: Repository<FormFieldEntity>,
  ) {}

  async createFormField(
    createFormFieldDTO: CreateFormFieldDTO,
    formId: number,
  ): Promise<void> {
    const fields: FormField[] = [];
    for (const [key, value] of Object.entries(createFormFieldDTO)) {
      fields.push({
        form_id: formId,
        field_name: key,
        field_type: value,
      });
    }
    await this.formFieldRepository.save(
      this.formFieldRepository.create(fields),
    );
  }
}
