import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { ConfigModule } from './config/config.module';
import { ArtikelModule } from './artikel/artikel.module';
import { KategoriModule } from './kategori/kategori.module';
@Module({
  imports: [
    AdminModule,
    ConfigModule,
    ArtikelModule,
    KategoriModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
