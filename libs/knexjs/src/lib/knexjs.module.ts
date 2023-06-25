import { DynamicModule, Module } from '@nestjs/common';
import { ConfigurableModuleClass, OPTIONS_TYPE } from './knexConfiguration';
import knex, { Knex } from 'knex';
import { DefaultKnexProvider } from './constantKnex';

@Module({
  controllers: [],
  providers: [],
  exports: [],
})
export class KnexjsModule extends ConfigurableModuleClass {
  static root(options: typeof OPTIONS_TYPE): DynamicModule {
    const dynamicModule = super.forRoot(options);
    const knexI = createKnexInstance(options?.token, options.options);

    return {
      global: true,
      module: dynamicModule.module,

      providers: [...(dynamicModule.providers ?? []), knexI],
    };
  }
}

export const createKnexInstance = (
  token: string | undefined,
  options: Knex.Config
) => {
  const temp = token ? token : DefaultKnexProvider;
  return {
    provide: temp,
    useFactory: () => {
      const knexInstance = knex(options);
      return knexInstance;
    },
  };
};
