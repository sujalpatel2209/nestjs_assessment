import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class FormFilledDataDTO {
  @IsNotEmpty()
  @IsUUID(4)
  uniqueId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  phonenumber: number;

  @IsNotEmpty()
  @IsBoolean()
  isGraduate: boolean;
}
