import { ConfigurableModuleBuilder, Inject } from '@nestjs/common';

import SMTPTransport = require('nodemailer/lib/smtp-transport');
import { Provider } from 'react';
import { NODEMAILER_PROVIDER } from './constant';
import { NodemailerModule } from './nodemailer.module';

export const {
  ConfigurableModuleClass,
  ASYNC_OPTIONS_TYPE,
  OPTIONS_TYPE,
  MODULE_OPTIONS_TOKEN,
} = new ConfigurableModuleBuilder<SMTPTransport | SMTPTransport.Options>()
  .setClassMethodName('forRoot')
  .setExtras({ name: '' }, (definition, extras) => {
    console.log(definition);
    const optionProvider = definition.providers[0];
    extras.name ||= NODEMAILER_PROVIDER;
    if ('provide' in optionProvider) {
      optionProvider.provide = `${optionProvider.provide.toString()}-option-${
        extras.name
      }`;
    }
    console.log(definition);
    return definition;
  })
  .build();

export const getNodeMailerProvider = (name = NODEMAILER_PROVIDER) => {
  return `${MODULE_OPTIONS_TOKEN.toString()}-provider-${name}`;
};

export const getNodeMailerToken = (name = NODEMAILER_PROVIDER) => {
  return `${MODULE_OPTIONS_TOKEN.toString()}-option-${name}`;
};

export function InjectNodeMailer(token = NODEMAILER_PROVIDER) {
  return Inject(getNodeMailerProvider(token));
}
