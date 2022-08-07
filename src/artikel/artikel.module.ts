import { Module } from '@nestjs/common';
import { ArtikelService } from './artikel.service';
import { ArtikelController } from './artikel.controller';
import { Artikel } from './entities/artikel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Artikel])],
  controllers: [ArtikelController],
  providers: [ArtikelService]
})
export class ArtikelModule { }
