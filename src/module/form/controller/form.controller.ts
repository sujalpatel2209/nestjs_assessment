import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateFormDTO } from '../dto/createFormDTO';
import { FormService } from '../service/form.service';
import { HttpStatusCode } from '../../../common/enums/httpStatusCodeEnum';
import { ResponseMessage } from '../../../constants/messages/messages.interface';

@Controller()
export class FormController {
  constructor(private formService: FormService) {}
  @Post()
  @HttpCode(HttpStatusCode.CREATED)
  async createForm(
    @Body() createFormDTO: CreateFormDTO,
  ): Promise<ResponseMessage> {
    return await this.formService.createForm(createFormDTO);
  }
}
