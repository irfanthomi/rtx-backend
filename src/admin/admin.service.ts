import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
@Injectable()
export class AdminService {
  constructor(@InjectRepository(Admin) private adminRepository: Repository<Admin>) { }

  create(createAdminDto: CreateAdminDto) {
    return this.adminRepository.save(createAdminDto);
  }


  findAll() {
    return this.adminRepository.find();
  }

  findOne(id_admin: number) {
    return this.adminRepository.findOneBy({ id_admin });
  }

  update(id_admin: number, updateAdminDto: UpdateAdminDto) {
    return this.adminRepository.update(id_admin, updateAdminDto);
  }

  remove(id_admin: number) {
    return this.adminRepository.delete(id_admin);
  }
}
