import { MigrationInterface, QueryRunner } from "typeorm";

export class AgifyUser1714551429966 implements MigrationInterface {
    name = 'AgifyUser1714551429966'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "role" varchar NOT NULL, "created_at" text NOT NULL, "updated_at" text NOT NULL, "expectedAge" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_user"("id", "name", "email", "password", "role", "created_at", "updated_at") SELECT "id", "name", "email", "password", "role", "created_at", "updated_at" FROM "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "role" varchar NOT NULL, "created_at" text NOT NULL, "updated_at" text NOT NULL)`);
        await queryRunner.query(`INSERT INTO "user"("id", "name", "email", "password", "role", "created_at", "updated_at") SELECT "id", "name", "email", "password", "role", "created_at", "updated_at" FROM "temporary_user"`);
        await queryRunner.query(`DROP TABLE "temporary_user"`);
    }

}
