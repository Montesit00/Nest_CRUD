import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  private productos = [{
    id:1,
    name:"coca",
    stock:"200"
  },
  {
    id:2,
    name:"pepsi",
    stock:"200"

  },
  {
    id:3,
    name:"fanta",
    stock:"200"
  }]

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  
  @Get(":id")
  getProducto(@Param("id") id : string):any {
    return this.productos.find( product => product.id === +id);
  }

  @Post()
  sendData(@Body() datos ): any {
    return datos;
  }

  @Put(':id')
  upDate(@Param('id') id: number, @Body() productos) : any {
    return this.productos.map( product => {
      if(product.id === +id){
        return product = {...product, ...productos}
      } 
      return product 
    }
    )}

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productos = this.productos.filter(product => product.id !== +id);
  }
}
