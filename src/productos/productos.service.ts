import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProductosService {

  //creo un objeto producto, este llevara las propiedades id,marca y stock
  private productos:{
    id:string,
    marca:string,
    stock:number,
  }[]=[]

  //metodo create le paso los parametro marca y stock. Crea un nuevo producto.
  create(marca:string,stock:number) {
    this.productos.push({
      id: uuid(), //le doy un id definido por uuid
      marca,
      stock
    });
  };
  
  //para mostrar todos los productos
  findAll() {
    return this.productos;
  };

  //para mostrar un producto segun su id
  findOne(id: string) {
    const producto = this.productos.find((p) => p.id === id);
      if(!producto){
        //NotFoundException es 'excepcion' que nos da nest, sirve para indicar cuando un producto no fue encontrado (404)
        return new NotFoundException(`El ${id} de este producto no se encontro`) 
      };
    return producto;
  };

  //update le paso tres parametros uno es el id y los otros dos la nueva informacion que quiero cargar
  update(id: string, newMarca:string, newStock:number) {
    this.productos = this.productos.map((producto) => {
        if(id === producto.id){
          producto.marca = newMarca,
          producto.stock = newStock
        };

      return producto;
    });
  };

  //elimino un producto si es que se encuentra el idea
  remove(id: string) {
    this.productos = this.productos.filter((e)=> e.id !== id);
  }
}
