import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { OrderDto } from './order.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

@EventPattern()
  handleOrderPlaced(@Payload() order: OrderDto) {
    return this.appService.handleOrderPlacedgetHello(order);
  }
}
