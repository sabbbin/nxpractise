import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import * as admin from 'firebase-admin';

@Injectable()
export class AppService {
  // constructor(@Inject('knexProvider') private readonly knex: Knex) {}
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
