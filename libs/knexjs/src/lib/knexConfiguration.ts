import { ConfigurableModuleBuilder } from '@nestjs/common';

import { KnexModuleOptions } from './constantKnex';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE } =
  new ConfigurableModuleBuilder<KnexModuleOptions>()
    .setClassMethodName('forRoot')
    .build();
