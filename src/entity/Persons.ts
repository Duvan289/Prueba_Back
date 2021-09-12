import { Entity,Column,PrimaryGeneratedColumn, ManyToOne, ObjectIdColumn, PrimaryColumn, ObjectID } from "typeorm";


@Entity()
export class Persons{
    @ObjectIdColumn()
    idPerson: number;

    @Column()
    name: string;

    @Column()
    birth: string;

}