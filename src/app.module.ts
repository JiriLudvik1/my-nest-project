import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from 'orm.config';
import { EventsGateway } from './events.gateway';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(ormConfig.options),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}