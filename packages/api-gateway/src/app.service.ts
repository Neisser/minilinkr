import { Injectable } from '@nestjs/common';
import { getUrlMessage } from '@minilinkr/url';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('hello');
    return getUrlMessage();
  }
}
