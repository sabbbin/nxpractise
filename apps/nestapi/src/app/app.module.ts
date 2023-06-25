import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnexjsModule } from '@my-org/knexjs';

@Module({
  imports: [
    KnexjsModule.forRoot({
      options: {
        client: 'mysql',
        connection: {
          host: '127.0.0.1',
          port: 3306,
          user: 'root',
          password: '7',
          database: 'HMconnectIPS',
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
