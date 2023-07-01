import { DynamicModule, Inject, Module, Provider } from '@nestjs/common';
import {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
} from './knexConfiguration';
import knex, { Knex } from 'knex';
import { DefaultKnexProvider } from './constantKnex';

@Module({})
export class KnexjsModule extends ConfigurableModuleClass {
  static forRoot(options: typeof OPTIONS_TYPE): DynamicModule {
    console.log('helo');
    const dynamicModule = super.forRoot(options);
    const knexI = this.createKnexInstance(options?.token, options.options);

    return {
      global: true,
      imports: dynamicModule.imports,
      module: dynamicModule.module,
      providers: [...(dynamicModule.providers ?? []), knexI],
      exports: [knexI],
    };
  }

  private static createKnexInstance(
    token: string | undefined,
    options: Knex.Config
  ): Provider {
    return {
      provide: DefaultKnexProvider,

      useFactory: () => {
        const knexInstance = knex(options);
        knexInstance
          .raw('select 1')
          .then(() => {
            console.log('knex connected');
          })
          .catch((e) => {
            console.log('error in connect knex' + e);
          });
        return knexInstance;
      },
    };
  }
}

export const InjectKnex = () => {
  return Inject(MODULE_OPTIONS_TOKEN);
};
