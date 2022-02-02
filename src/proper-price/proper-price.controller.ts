import { Controller, Get } from '@nestjs/common';
import { ProperPriceService } from './proper-price.service';

@Controller('proper-price')
export class ProperPriceController {
  constructor(private properPriceService: ProperPriceService) { }

  @Get('/')
  getHi(): string {
    return this.properPriceService.getHi();
  }
}
