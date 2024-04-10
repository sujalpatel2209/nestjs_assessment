import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateFormFilledDTO {
  @IsNotEmpty()
  @IsNumber()
  form_id: number;
}
