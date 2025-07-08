import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../Categoria/entities/categoria.entity";

@Entity({name:'tb_produtos'})
export class Produto{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    nome: string

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    marca: string

    @IsNotEmpty()
    @Column({length: 5000, nullable: false})
    descricao: string

    @IsNotEmpty()
     @Column({ type: 'date', nullable: false })
    data: Date;

    @IsNotEmpty()
    @Column({type: 'decimal', precision: 10, scale: 2, nullable: false })
    preco: number;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria

}