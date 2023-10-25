import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type productoDocument = HydratedDocument<Producto>;
//productoDocument hace  o define las propiedas que tendra las clases hasta la id

@Schema()
export class Producto {

    @Prop({ required: true })
    marca: string;

    @Prop({ required: true })
    stock: number;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto)
//linea 20 crea el esquema apartir de la clase