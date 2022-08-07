import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArtikelDto } from './dto/create-artikel.dto';
import { UpdateArtikelDto } from './dto/update-artikel.dto';
import { Artikel } from './entities/artikel.entity';
@Injectable()
export class ArtikelService {
  constructor(@InjectRepository(Artikel) private artikelRepository: Repository<Artikel>) { }

  create(createArtikelDto: CreateArtikelDto) {
    return this.artikelRepository.save(createArtikelDto);
  }

  findAll() {
    return this.artikelRepository
      .createQueryBuilder("artikel")
      .leftJoinAndSelect("artikel.penulis", "id_admin")
      .leftJoinAndSelect("artikel.kategori", "id_kategori")
      .getMany();
  }

  findOne(id_artikel: number) {
    return this.artikelRepository.findOneBy({ id_artikel });
  }

  update(id_artikel: number, updateArtikelDto: UpdateArtikelDto) {
    return this.artikelRepository.update(id_artikel, updateArtikelDto);
  }

  remove(id_admin: number) {
    return this.artikelRepository.delete(id_admin);
  }
}
