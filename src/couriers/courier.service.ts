import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCourierDto } from './dto/createCourier.dto';
import { UpdateCourierDto } from './dto/updateCourier.dto';
import { Courier, CourierDocument } from './schemas/couriers.schema';

@Injectable()
export class CourierService {
  constructor(
    @InjectModel(Courier.name) private readonly model: Model<CourierDocument>,
  ) {}

  async findAll(): Promise<Courier[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Courier> {
    return await this.model.findById(id).exec();
  }

  async create(createCourierDto: CreateCourierDto): Promise<Courier> {
    return await new this.model({
      ...createCourierDto,
      createdAt: new Date(),
    }).save();
  }

  async update(
    id: string,
    updateCourierDto: UpdateCourierDto,
  ): Promise<Courier> {
    return await this.model.findByIdAndUpdate(id, updateCourierDto).exec();
  }

  async delete(id: string): Promise<Courier> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
