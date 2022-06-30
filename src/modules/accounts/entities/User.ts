import { v4 as uuidV4 } from 'uuid';
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Transaction } from '../../investing/entities/Transaction';
import { Asset } from '../../investing/entities/Asset';
import { Earnings } from '../../investing/entities/Earnings';

@Entity('users')
export class User extends BaseEntity {
    @PrimaryColumn()
    id?: string

    @Column()
    name: string;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    password: string;

    @OneToMany(
        () => Transaction, 
        (transaction) => transaction.user
    )
    transactions?: Transaction[];

    @OneToMany(
        () => Earnings, 
        (earnings) => earnings.user
    )
    earnings?: Earnings[];

    @OneToMany(
        () => Asset, 
        (asset) => asset.user
    )
    assets?: Asset[];

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        super();
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}