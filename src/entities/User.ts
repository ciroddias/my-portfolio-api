import { v4 as uuidV4 } from 'uuid';
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { Transaction } from './Transaction';
import { Asset } from './Asset';

@Entity('users')
export class User {
    @PrimaryColumn()
    id?: string

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Transaction, (transaction) => transaction.user)
    @JoinColumn()
    transactions?: Transaction[];

    @OneToMany(() => Asset, (asset) => asset.user)
    @JoinColumn()
    assets?: Asset[];

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}