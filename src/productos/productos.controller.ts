import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { MongoidPipe } from './pipes/mongo.pipes';

@Controller('productos') //aqui se define en que ruta del controlador
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {} //aqui se inyecta el productosServices en el constructor

  @Post()
  create(@Body() producto: CreateProductoDto) {
    return this.productosService.create(producto)
  }
  @Get()
  findAll() {
    return this.productosService.findAll()
  }

  @Get(":id")
  findOne (@Param("id", MongoidPipe) productId: string) {
    return this.productosService.FindOne(productId)
  }

  @Patch(":id")
  editProduct(@Param("id", MongoidPipe) productId: string, @Body() { marca,stock }: UpdateProductoDto) {
    this.productosService.update(productId, {marca , stock})
  }

  @Delete(":id")
  deleteProduct (@Param("id", MongoidPipe) id: string) {
      this.productosService.delete(id)
    } 
}
