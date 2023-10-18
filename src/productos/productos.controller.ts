import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ParseUUIDPipe } from '@nestjs/common';

@Controller('productos') //aqui se define en que ruta del controlador
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {} //aqui se inyecta el productosServices en el constructor

  //endpoint @Post crear un nuevo producto
  @Post() 
  create(@Body(){marca,stock}: CreateProductoDto) { //utilizo el dto para traer marca y nombre (creo)
    return this.productosService.create(marca,stock); // se traer el metodo create de productosService y le pasa marca y stock
  }

  //endpoint @get para llamar todos los productos
  @Get()
  findAll() {
    return this.productosService.findAll(); // se trae el metodo findAll para traer todos los productos
  }

  //endpoint @get para llamar todos los productos por su id
  @Get(":id")
  //@param es un decorador que se utiliza para extraer los parametros de la url
  //ParseUUIDPipe es una pipe que se utiliza para validar que el id indicado en el parametro sea una id valida de uuid, si no es nest se encarga de manejar el error
  findOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.productosService.findOne(id);
  }

  //endpoint @patch para actualizar/editar un producto
  //@body es otro decorar, este permite recibir objetos desde el cuerpo de la solicitud. Esto debe concidir con el objeto definido en UpdateProductoDto
  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() {marca,stock}: UpdateProductoDto) {
    return this.productosService.update(id, marca,stock); // se llama el metodo update y se le pasa los parametros id,marca, y stock
  }

  //endpoint @delete para eliminar un producto por su id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productosService.remove(id); // se llama el metodo remove y le paso el parametro id
  }
}
