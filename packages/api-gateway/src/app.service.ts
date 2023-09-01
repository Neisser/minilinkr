import { Injectable } from '@nestjs/common';
import { getUrlMessage, generateHash } from '@minilinkr/url';

@Injectable()
export class AppService {
  async getLongUrl(hash): Promise<string> {
    const longUrl = getUrlMessage(hash);
    return longUrl;
  }

  async shortUrl(id: number): Promise<string> {
    const hash = generateHash(id);
    return hash;
  }
}
