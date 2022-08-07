import { Timestamp } from "typeorm";

export class CreateAdminDto {
    username: string;
    password: string;
    email: string;
    level: string;
    nama: string;
    log: string
}
