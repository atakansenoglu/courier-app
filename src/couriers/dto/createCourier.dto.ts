import { BaseCourierDto } from './baseDto.dto';
import { IsInt, IsString } from 'class-validator';

export class CreateCourierDto {
  @IsString()
  courierId: string;

  @IsInt()
  latitude: number;

  @IsInt()
  longitude: number;
}
