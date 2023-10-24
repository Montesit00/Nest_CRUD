import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type productoDocument = HydratedDocument<Producto>;

@Schema()
export class Producto {
    @Prop()
    id: string;

    @Prop()
    marca: string;

    @Prop()
    stock: number;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto)
