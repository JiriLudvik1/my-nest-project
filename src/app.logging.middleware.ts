import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.time('Request-response time');
    console.log('Request details:', req.method, req.originalUrl);

    res.on('finish', () => {
      console.timeEnd('Request-response time');
      console.log("Request returned with status code: ", res.statusCode);
    });

    next();
  }
}