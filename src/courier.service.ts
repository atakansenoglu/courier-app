import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCourierDto } from './dto/CreateCourier.dto';
import { UpdateCourierDto } from './dto/UpdateCourier.dto';
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

  async create(CreateCourierDto: CreateCourierDto): Promise<Courier> {
    return await new this.model({
      ...CreateCourierDto,
      createdAt: new Date(),
    }).save();
  }

  async update(
    id: string,
    UpdateCourierDto: UpdateCourierDto,
  ): Promise<Courier> {
    return await this.model.findByIdAndUpdate(id, UpdateCourierDto).exec();
  }

  async delete(id: string): Promise<Courier> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
