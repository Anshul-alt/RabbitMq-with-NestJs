import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrderService {
  constructor(@Inject('ORDERS_SERVICE') private rabbitClient: ClientProxy) {}

  placeOrder(order: any) {
    this.rabbitClient.emit('order-placed', order);
    return { message: 'Order Placed!' };
  } 
}
