import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { Producto, ProductoSchema } from './entities/producto.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Producto.name, schema: ProductoSchema }])],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
