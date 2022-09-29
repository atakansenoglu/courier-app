import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CourierService } from './courier.service';
import { CreateCourierDto } from './dto/createCourier.dto';
import { UpdateCourierDto } from './dto/updateCourier.dto';
import { Courier } from './schemas/couriers.schema';

@ApiBearerAuth()
@ApiTags('couriers')
@Controller('courier')
export class CourierController {
  constructor(private readonly service: CourierService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'The found couriers',
    type: Courier,
  })
  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @ApiOperation({ summary: 'Create courier' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 201, description: 'Created courier.' })
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
