import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('courier')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('save-location')
  saveLocation(): string {
    return this.appService.saveLocation();
  }

  @Get('get-location')
  getCourierLocation(): string {
    return this.appService.getCourierLocation();
  }

  @Get('get-all-location')
  getAllLocation(): string {
    return this.appService.getAllLocation();
  }
}
