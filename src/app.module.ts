import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourierModule } from './couriers/courier.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://atakansenoglu:atakansenoglu@cluster0.rag4vwa.mongodb.net/?retryWrites=true&w=majority`,
    ),
    CourierModule,
  ],
})
export class AppModule {}
