import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { FormFilledDataDTO } from '../dto/FormFilledDataDTO';
import { HttpStatusCode } from '../../../common/enums/httpStatusCodeEnum';
import { FormFilledDataService } from '../service/form-filled-data.service';
import { GetFormDTO } from '../../form/dto/createFormDTO';
import { ResponseMessage } from '../../../constants/messages/messages.interface';

@Controller()
export class FormFilledDataController {
  constructor(private formFilledDataService: FormFilledDataService) {}
  @Post()
  @HttpCode(HttpStatusCode.CREATED)
  async filledData(
    @Query() params: GetFormDTO,
    @Body() formFilledData: FormFilledDataDTO,
  ): Promise<ResponseMessage> {
    return await this.formFilledDataService.formFilledData(
      formFilledData,
      params,
    );
  }

  @Get()
  @HttpCode(HttpStatusCode.OK)
  async fetchFormData(@Query() params: GetFormDTO) {
    return await this.formFilledDataService.fetchFormFilledData(params);
  }
}
