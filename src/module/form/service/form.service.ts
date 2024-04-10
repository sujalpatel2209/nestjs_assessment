import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CreateFormDTO, GetFormDTO } from '../dto/createFormDTO';
import { InjectRepository } from '@nestjs/typeorm';
import { FormEntity } from '../entity/form.entity';
import { Repository } from 'typeorm';
import { FormFieldService } from '../../form-field/service/form-field.service';
import { MESSAGE } from '../../../constants/messages/messages';
import { ResponseMessage } from '../../../constants/messages/messages.interface';
import { HttpStatusCode } from '../../../common/enums/httpStatusCodeEnum';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(FormEntity)
    @Inject(FormFieldService)
    private formRepository: Repository<FormEntity>,
    private formFieldService: FormFieldService,
  ) {}

  /**
   * Create from
   * @param createFormDTO
   */
  async createForm(createFormDTO: CreateFormDTO): Promise<ResponseMessage> {
    const { title } = createFormDTO;

    //Form title unique validation
    const isFormTitleUnique = await this.getForm({ form_title: title }, []);
    if (isFormTitleUnique) {
      throw new HttpException(
        MESSAGE.ERROR.TITLE_IS_NOT_UNIQUE,
        HttpStatusCode.INTERNAL_SERVER_ERROR,
      );
    }

    // Create Form
    const formData: FormEntity = this.formRepository.create({
      title: title,
    });
    await this.formRepository.save(formData);

    // Remove Title key from createFromDTO
    delete createFormDTO.title;

    await this.formFieldService.createFormField(createFormDTO, formData.id);

    return {
      status: 'success',
      message: MESSAGE.SUCCESS.FORM_CREATED,
    };
  }

  async getForm(
    getFormDTO: GetFormDTO,
    relations: string[],
  ): Promise<FormEntity> {
    const { form_title } = getFormDTO;
    return await this.formRepository.findOne({
      where: {
        title: form_title,
      },
      relations: relations,
    });
  }
}
