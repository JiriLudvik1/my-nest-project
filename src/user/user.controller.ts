import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('/:id')
    async getUser(@Param('id') id: number): Promise<User> {
        return await this.userService.getUser(id);
    }

    @Get('/')
    async getUsers(): Promise<User[]> {
        return await this.userService.getUsers();
    }

    @Post()
    async createUser(@Body() user: User): Promise<User> {
        return await this.userService.createUser(user);
    }
}