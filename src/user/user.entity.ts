import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column({ type: 'text' })
  created_at: Date;

  @Column({ type: 'text' })
  updated_at: Date;

  @Column()
  expectedAge: number
}