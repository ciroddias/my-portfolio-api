import { v4 as uuidV4 } from 'uuid';
import { Column, Entity, JoinColumn, ManyToOne, ManyToMany, PrimaryColumn } from 'typeorm';
import { User } from './User';
import { Transaction } from './Transaction';

@Entity("assets")
export class Asset {
    @PrimaryColumn()
    id?: string;

    @Column()
    ticker: string;

    @Column()
    sector: string;
    
    @Column()
    quantity: number;

    @Column('money')
    value: number;

    @ManyToOne(() => User, (user) => user.assets)
    @JoinColumn()
    user: User

    @ManyToMany(() => Transaction, (transaction) => transaction.user)
    @JoinColumn()
    transactions: Transaction[];

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}
