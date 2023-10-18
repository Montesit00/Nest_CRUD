import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';


@Controller('app')
export class AppController {

  @Get('')
  getHello(@Param('name') name: string): string {
    return 'hola! ' + name;
  }

}