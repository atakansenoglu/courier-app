import { Module } from '@nestjs/common';
import { CourierService } from './courier.service';
import { CourierController } from './courier.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Courier, CourierSchema } from './schemas/couriers.schema';

@Module({
  providers: [CourierService],
  controllers: [CourierController],
  imports: [
    MongooseModule.forFeature([{ name: Courier.name, schema: CourierSchema }]),
  ],
})
export class CourierModule {}
