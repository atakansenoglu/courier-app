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
  constructor(private readonly courierService: CourierService) {}

  @Get()
  async index() {
    return await this.courierService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.courierService.findOne(id);
  }

  @Post()
  async create(@Body() createCourierDto: CreateCourierDto) {
    return await this.courierService.create(createCourierDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCourierDto: UpdateCourierDto,
  ) {
    return await this.courierService.update(id, updateCourierDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.courierService.delete(id);
  }
}
