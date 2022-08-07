import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateKategoriDto } from './dto/create-kategori.dto';
import { UpdateKategoriDto } from './dto/update-kategori.dto';
import { Kategori } from './entities/kategori.entity';
@Injectable()
export class KategoriService {
  constructor(@InjectRepository(Kategori) private kategoriRepository: Repository<Kategori>) { }
  create(createKategoriDto: CreateKategoriDto) {
    return this.kategoriRepository.save(createKategoriDto);
  }

  findAll() {
    return this.kategoriRepository.find();
  }

  findOne(id_kategori: number) {
    return this.kategoriRepository.findOneBy({ id_kategori });
  }

  update(id_kategori: number, updateKategoriDto: UpdateKategoriDto) {
    return this.kategoriRepository.update(id_kategori, updateKategoriDto);
  }

  remove(id_kategori: number) {
    return this.kategoriRepository.delete(id_kategori);
  }
}
