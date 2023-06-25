import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';

@Injectable()
export class AppService {
  constructor(@Inject('knexProvider') private readonly knex: Knex) {}
  getData(): { message: string } {
    console.log('kenx');
    return { message: 'Hello API' };
  }
}
