import knex, { Knex } from 'knex';

export const DefaultKnexProvider = 'knexProvider';

export interface KnexModuleOptions {
  options: Knex.Config;
  token?: string;
}
