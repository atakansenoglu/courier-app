import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SaveLocationDto } from './dto/saveLocation.dto';
import { GetLocationDto } from './dto/GetLocation.dto';
import { GetAllLocationDto } from './dto/GetAllLocation.dto';
import { UpdateLocationDto } from './dto/UpdateLocation.dto';
import { Courier, CourierDocument } from './schemas/couriers.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Courier.name) private readonly model: Model<CourierDocument>,
  ) {}

  async findAll(): Promise<Courier[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Courier> {
    return await this.model.findById(id).exec();
  }

  async save(saveLocationDto: SaveLocationDto): Promise<Courier> {
    return await new this.model({
      ...saveLocationDto,
      createdAt: new Date(),
    }).save();
  }

  async update(
    id: string,
    updateLocationDto: UpdateLocationDto,
  ): Promise<Courier> {
    return await this.model.findByIdAndUpdate(id, updateLocationDto).exec();
  }

  async delete(id: string): Promise<Courier> {
    return await this.model.findByIdAndDelete(id).exec();
  }

  /* getHello(): string {
    return 'Hello World!';
  }

  saveLocation(): string {
    return 'Location saved.';
  }

  getCourierLocation(): string {
    return 'Courier location...';
  }

  getAllLocation(): string {
    return 'All couriers locations...';
  } */
}
