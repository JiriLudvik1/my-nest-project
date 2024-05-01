import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { AgifyService } from './agify.service';
import { EmailValidationService } from './email-validation.service';
import { EventsGateway } from 'src/events.gateway';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService, AgifyService, EmailValidationService, EventsGateway],
})
export class UserModule {}
