import { Inject, Module, OnModuleInit } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InjectKnex, KnexjsModule } from '@my-org/knexjs';
import knex, { Knex } from 'knex';
import { FcmModuleModule } from '@my-org/fcm-module';
import { NodemailerModule } from '@my-org/nodemailer';

@Module({
  imports: [
    FcmModuleModule.forRoot({
      firebaseSpecsPath: './firebase-admin-sdk.json',
    }),
    KnexjsModule.forRoot({
      options: {
        client: process.env.DB_CLIENT,

        connection: {
          host: process.env.DB_HOST,
          port: Number(process.env.DB_PORT),
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
        },
      },
    }),
    NodemailerModule.forRoot({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(@InjectKnex() private knex: Knex) {}
  // onModuleInit() {
  //   this.knex.migrate
  //     .latest()
  //     .then(() => {
  //       console.log('knex migrate successful');
  //     })
  //     .catch(() => {
  //       console.log('error in migrations');
  //     });
  // }
}
