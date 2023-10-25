import { Injectable, NotFoundException } from '@nestjs/common';
import { Producto } from './entities/producto.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductoDto } from './dto/create-producto.dto';

@Injectable()
export class ProductosService {

  constructor(@InjectModel(Producto.name) private ProductoModel: Model<Producto>) {}

  async create(producto: CreateProductoDto) {
    return await this.ProductoModel.create(producto)
  }
  
  async findAll() {
    return await this.ProductoModel.find() 
  }

  async FindOne(id: string) {
    return await this.ProductoModel.findById(id)
  }

  async update(id: string, producto: CreateProductoDto) {
    return await this.ProductoModel.findByIdAndUpdate(id, producto, { new: true })
  }

  async delete(id: string) {
    await this.ProductoModel.findByIdAndDelete(id)
  }
}
