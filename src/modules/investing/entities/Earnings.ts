import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from 'uuid';
import { User } from "../../accounts/entities/User";
import { Asset } from "./Asset";

@Entity('earnings')
export class Earnings extends BaseEntity {
    @PrimaryColumn()
    id: string;

    @Column()
    amount: number

    @Column()
    date?: Date;

    @ManyToOne(
        () => User, 
        (user) => user.earnings
    )
    @JoinColumn({
        name: 'user_id'
    })
    user: User;

    @ManyToOne(
        () => Asset, 
        (asset) => asset.earnings
    )
    @JoinColumn({
        name: 'asset_id'
    })
    asset: Asset;

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