import { Inject, Injectable } from '@nestjs/common';
import { FormFilledDataDTO } from '../dto/FormFilledDataDTO';
import { FormService } from '../../form/service/form.service';
import { MESSAGE } from '../../../constants/messages/messages';
import { FormFilledService } from '../../form-filled/service/form-filled.service';
import { InjectRepository } from '@nestjs/typeorm';
import { FormFilledDataEntity } from '../entiry/form-filled-data.entity';
import { Repository } from 'typeorm';
import { ResponseMessage } from '../../../constants/messages/messages.interface';
import { GetFormDTO } from 'src/module/form/dto/createFormDTO';
import { formFilledData } from '../interface/form-filled-data.interface';

@Injectable()
export class FormFilledDataService {
  constructor(
    @InjectRepository(FormFilledDataEntity)
    private readonly formFilledDataRepository: Repository<FormFilledDataEntity>,
    @Inject(FormService)
    @Inject(FormFilledService)
    private formService: FormService,
    private formFilledService: FormFilledService,
  ) {}

  /**
   * Save form filled data
   * @param formFilledData
   * @param queryParams
   */
  async formFilledData(
    formFilledData: FormFilledDataDTO,
    queryParams: GetFormDTO,
  ): Promise<ResponseMessage> {
    // Check Form available or not using title
    const formData = await this.formService.getForm(queryParams, [
      'form_fields',
    ]);
    if (!formData) {
      throw new Error(MESSAGE.ERROR.RECORD_NOT_FOUND);
    }

    // Create a record in form_filled table
    const formFilled = await this.formFilledService.createFormFilled({
      form_id: formData.id,
    });

    // Prepare array object for save data
    const data: formFilledData[] = [];
    for (const [, value] of Object.entries(formData?.form_fields)) {
      const { id: field_id, field_name } = value;
      data.push({
        form_filled_id: formFilled.id,
        form_field_id: field_id,
        field_value: formFilledData[field_name],
      });
    }

    // Save form data
    await this.formFilledDataRepository.save(
      this.formFilledDataRepository.create(data),
    );

    return {
      status: 'success',
      message: MESSAGE.SUCCESS.FORM_DATA_SAVED,
    };
  }

  async fetchFormFilledData(queryParams: GetFormDTO) {
    return await this.formService.getForm(queryParams, [
      'form_filled.form_filled_data.form_field',
    ]);
  }
}
