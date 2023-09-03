import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'PROXIMAMENTE PARKING - IN PROGRESS';
  }
}
