import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Kategori {
    @PrimaryGeneratedColumn({ type: "int" })
    id_kategori: number;

    @Column()
    kategori: string;

    @Column({ type: "timestamp", default: () => "NOW()" })
    tglBuat: string;
}
