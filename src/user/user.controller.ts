import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('/:id')
    getUser(@Param('id') id: number){
        return this.userService.getUser(id);
    }

    @Get('/')
    getUsers(){
        return this.userService.getUsers();
    }

    @Post()
    createUser(@Body() user: User){
        return this.userService.createUser(user);
    }
}