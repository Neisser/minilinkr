import { toBase62 } from './toBase62';

export function getUrlMessage(urlHash: string): string {
  const dummyUrls = {
    '5I1Ayh1': 'https://github.com/Neisser/neisser',
    'glql81': 'https://docs.nestjs.com/controllers#request-payloads'
  }
  return dummyUrls[urlHash];
}

export function generateHash(id: number): string {
  const hashUrl = toBase62(id);
  return hashUrl;
}