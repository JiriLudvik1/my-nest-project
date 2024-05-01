import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { NotFoundError } from 'rxjs';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('/:id')
    async getUser(@Param('id') id: number){
        return await this.userService.getUser(id);
    }

    @Get('/')
    async getUsers(){
        return await this.userService.getUsers();
    }

    @Post()
    async createUser(@Body() user: User){
        return await this.userService.createUser(user);
    }
}