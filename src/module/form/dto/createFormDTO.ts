import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFormDTO {
  @IsNotEmpty()
  @IsString()
  uniqueId: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  phonenumber: number;

  @IsNotEmpty()
  @IsString()
  isGraduate: boolean;
}

export class GetFormDTO {
  @IsNotEmpty()
  @IsString()
  form_title: string;
}
