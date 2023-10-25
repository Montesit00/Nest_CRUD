import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class CreateProductoDto {
    @IsNotEmpty() //validacion para que no este vacio
    @IsString() // que sea string
    marca:string
    stock:number
}
