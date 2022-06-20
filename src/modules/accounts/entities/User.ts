import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { Transaction } from '../../investing/entities/Transaction';
import { Asset } from '../../investing/entities/Asset';

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

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}