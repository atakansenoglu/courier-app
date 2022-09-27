import { Module } from '@nestjs/common';
import { CourierController } from './courier.controller';
import { CourierService } from './courier.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Courier, CourierSchema } from './schemas/couriers.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Courier.name, schema: CourierSchema }]),
  ],
  controllers: [CourierController],
  providers: [CourierService],
})
export class CourierModule {}
