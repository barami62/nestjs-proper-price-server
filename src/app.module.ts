import { Module } from '@nestjs/common';
import { ProperPriceModule } from './proper-price/proper-price.module';

@Module({
  imports: [ProperPriceModule],
})
export class AppModule { }
