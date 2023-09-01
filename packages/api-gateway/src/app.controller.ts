import { Controller, Get, Post, Param, Res, Body } from '@nestjs/common';
import { Response } from 'express';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  async getLongUrl(
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<void> {
    const longURl = await this.appService.getLongUrl(id);
    console.log(longURl);
    res.status(301).redirect(longURl);
  }

  @Post()
  async shortUrl(@Body() body: { id: number }): Promise<any> {
    const { id } = body;
    const hash = await this.appService.shortUrl(id);
    return hash;
  }
}
