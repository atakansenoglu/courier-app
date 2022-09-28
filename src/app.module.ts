import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourierModule } from './couriers/courier.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/?retryWrites=true&w=majority`,
    ),
    CourierModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
