import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  Max,
} from 'class-validator';

export class CreateFormFieldDTO {
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
  @Max(10)
  phonenumber: number;

  @IsNotEmpty()
  @IsBoolean()
  isGraduate: boolean;
}
