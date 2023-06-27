import { Inject, Module, OnModuleInit } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnexjsModule } from '@my-org/knexjs';
import knex, { Knex } from 'knex';
import { FcmModuleModule } from '@my-org/fcm-module';

@Module({
  imports: [
    FcmModuleModule.forRoot({
      firebaseSpecsPath: './firebase-admin-sdk.json',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(@Inject('knexProvider') private knex: Knex) {}
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
