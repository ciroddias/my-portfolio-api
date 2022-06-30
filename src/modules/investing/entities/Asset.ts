import { v4 as uuidV4 } from 'uuid';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, OneToMany, CreateDateColumn } from 'typeorm';
import { User } from '../../accounts/entities/User';
import { Transaction } from './Transaction';
import { Earnings } from './Earnings';

export enum AssetTypes {
    STOCK = 'stock',
    FII = 'fii',
    NULL = 'not set'
}

@Entity("assets")
export class Asset {
    @PrimaryColumn()
    id?: string;

    @Column({
        type: "enum",
        enum: AssetTypes,
        default: 'not set'
    })
    type: string;

    @Column()
    ticker: string;

    @Column()
    sector: string;
    
    @Column()
    quantity: number;

    @Column()
    value: number;

    @ManyToOne(
        () => User, 
        (user) => user.assets
    )
    @JoinColumn({
        name: 'user_id'
    })
    user: User

    @OneToMany(
        () => Transaction, 
        (transaction) => transaction.asset
    )
    transactions: Transaction[];

    @OneToMany(
        () => Earnings, 
        (earnings) => earnings.asset
    )
    earnings?: Earnings[];

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}
