import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CourierService } from './courier.service';
import { CreateCourierDto } from './dto/CreateCourier.dto';
import { UpdateCourierDto } from './dto/UpdateCourier.dto';

@Controller('couriers')
export class CourierController {
  constructor(private readonly service: CourierService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() createCourierDto: CreateCourierDto) {
    return await this.service.create(createCourierDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCourierDto: UpdateCourierDto,
  ) {
    return await this.service.update(id, updateCourierDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
