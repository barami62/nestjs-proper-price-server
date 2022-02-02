import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProperPriceModule } from './proper-price/proper-price.module';

@Module({
  imports: [ProperPriceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
