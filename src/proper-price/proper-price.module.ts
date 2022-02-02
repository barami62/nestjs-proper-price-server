import { Module } from '@nestjs/common';
import { ProperPriceController } from './proper-price.controller';
import { ProperPriceService } from './proper-price.service';

@Module({
  controllers: [ProperPriceController],
  providers: [ProperPriceService]
})
export class ProperPriceModule { }
