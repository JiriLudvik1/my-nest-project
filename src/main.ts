import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './app.service';
import { LoggerMiddleware } from './app.logging.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {httpsOptions: {rejectUnauthorized: false}});

  const loggerMiddleware = new LoggerMiddleware();
  app.use(loggerMiddleware.use.bind(loggerMiddleware));
  
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(3000);
}
bootstrap();
