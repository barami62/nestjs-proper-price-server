import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private properPriceService: AppService) { }

  @Get('/')
  getHello(): string {
    return this.properPriceService.getHello();
  }
}
