import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1655484867420 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "users",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "name",
                            type: "varchar"
                        },
                        {
                            name: "email",
                            type: "varchar"
                        },
                        {
                            name: "password",
                            type: "varchar"
                        },
                        {
                            name: "transactions",
                            type: "uuid[]"
                        },
                        {
                            name: "assets",
                            type: "uuid[]"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
