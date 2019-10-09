import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Vehicle {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    badgeNum: string;

    @Column()
    empName: string;

    @Column()
    carplateNum: string;

    @Column()
    carModel: string;

    @Column()
    contactNum: string;

    @Column()
    regDate: Date;

}
