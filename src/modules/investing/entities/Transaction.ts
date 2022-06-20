import {v4 as uuidV4} from 'uuid';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { User } from '../../accounts/entities/User';
import { Asset } from './Asset';

@Entity("transactions")
export class Transaction {
    @PrimaryColumn()
    id?: string;

    @Column()
    ticker: string;

    @Column()
    quantity: number;

    @Column('money')
    price: number;

    @Column()
    date?: Date;

    @ManyToOne(() => User, (user) => user.transactions)
    @JoinColumn()
    user: User;

    @ManyToMany(() => Asset, (asset) => asset.transactions)
    @JoinColumn()
    assets: Asset[];

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }

        if (!this.date) {
            this.date = new Date();
        }
    }
}