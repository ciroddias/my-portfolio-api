import {v4 as uuidV4} from 'uuid';
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { User } from '../../accounts/entities/User';
import { Asset } from './Asset';

enum TransactionTypes {
    purchase = 'purchase',
    sale = 'sale'
}

@Entity("transactions")
export class Transaction extends BaseEntity {
    @PrimaryColumn()
    id?: string;

    @Column({
        type: "enum",
        enum: TransactionTypes
    })
    type: string;

    @Column()
    quantity: number;

    @Column('money')
    price: number;

    @Column()
    date?: Date;

    @ManyToOne(
        () => User, 
        (user) => user.transactions
    )
    @JoinColumn({
        name: 'user_id'
    })
    user: User;

    @ManyToOne(
        () => Asset, 
        (asset) => asset.transactions
    )
    @JoinColumn({
        name: 'asset_id'
    })
    asset: Asset;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        super();
        if (!this.id) {
            this.id = uuidV4();
        }

        if (!this.date) {
            this.date = new Date();
        }
    }
}