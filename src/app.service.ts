import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Courier, CourierDocument } from './schemas/couriers.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Courier.name) private readonly model: Model<CourierDocument>,
  ) {}

  getHello(): string {
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
  }
}
