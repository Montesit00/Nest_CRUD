import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductosModule, MongooseModule.forRoot('mongodb+srv://monte:monte123@monte.xnfkexl.mongodb.net/progra?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
