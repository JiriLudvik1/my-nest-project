import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { AgifyService } from './agify.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly agifyService: AgifyService
  ) {}

  async getUser(paramId: number): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id: paramId } });

    if (user === null) {
      throw new NotFoundException(`User with id: [${paramId}] was not found!`);
    }
    
    return user;
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
    user.expectedAge = await this.agifyService.getAge(user.name)

    return this.usersRepository.save(user);
  }
}