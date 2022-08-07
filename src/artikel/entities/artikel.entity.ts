import { type } from "os";
import { Admin } from "src/admin/entities/admin.entity";
import { Kategori } from "src/kategori/entities/kategori.entity";
import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, OneToMany, JoinColumn } from "typeorm";
@Entity('artikel')
export class Artikel {
    @PrimaryGeneratedColumn({ type: "int" })
    id_artikel: number;

    @Column()
    judul: string;
    @Column({ type: "text" })
    isi: string;

    @Column({ type: 'timestamp', default: () => 'NOW()' })
    tanggal: string;

    @Column()
    gambar: string;

    @ManyToOne((type) => Kategori, (kategori) => kategori.id_kategori, {
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "kategori" })
    kategori: Kategori[];


    @ManyToOne((type) => Admin, (penulis) => penulis.id_admin, {
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "penulis" })
    penulis: Admin[]

}
