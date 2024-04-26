import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getUser(paramId: number): Promise<User> {
    return this.usersRepository.findOne({ where: { id: paramId } })
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async createUser(user: User): Promise<User> {
    if (user === undefined) {
        throw new Error('User cannot be empty');
        }

    user.created_at = new Date();
    user.updated_at = new Date();

    return this.usersRepository.save(user);
  }
}