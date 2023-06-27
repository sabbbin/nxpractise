import { Inject, Module, OnModuleInit } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnexjsModule } from '@my-org/knexjs';
import knex, { Knex } from 'knex';

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
        useNullAsDefault: true,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor(@Inject('knexProvider') private knex: Knex) {}
  onModuleInit() {
    this.knex.migrate
      .latest()
      .then(() => {
        console.log('knex migrate successful');
      })
      .catch(() => {
        console.log('error in migrations');
      });
  }
}
