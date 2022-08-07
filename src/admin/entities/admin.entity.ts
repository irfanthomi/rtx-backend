import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('admin')
export class Admin {
    @PrimaryGeneratedColumn({ type: 'int' })
    id_admin: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;
    @Column()
    level: string;
    @Column()
    nama: string;
    @Column({ type: 'timestamp', default: () => 'NOW()' })
    log: string;
}