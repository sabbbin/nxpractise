import { DynamicModule, Module, Provider } from '@nestjs/common';
import {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
  getNodeMailerProvider,
  getNodeMailerToken,
} from './nodemailer.feature';
import { MailerModule } from '@nestjs-modules/mailer';
import { Transport, TransportOptions, createTransport } from 'nodemailer';
import { NODEMAILER_PROVIDER } from './constant';

@Module({})
export class NodemailerModule extends ConfigurableModuleClass {
  static forRoot(option: typeof OPTIONS_TYPE): DynamicModule {
    const dynamicModule = super.forRoot(option);
    console.log(option.name);
    const nodeModuelInstance = this.createNodeMailer(option.name);
    console.log(typeof OPTIONS_TYPE, MODULE_OPTIONS_TOKEN);
    return {
      global: true,
      imports: dynamicModule.imports,
      module: dynamicModule.module,
      providers: [...(dynamicModule.providers ?? []), nodeModuelInstance],
      exports: [nodeModuelInstance],
    };
  }

  private static createNodeMailer(name = NODEMAILER_PROVIDER): Provider {
    console.log(getNodeMailerProvider(name));
    return {
      provide: getNodeMailerProvider(name),
      inject: [getNodeMailerToken(name)],
      useFactory: (options: TransportOptions) => {
        return createTransport(options);
      },
    };
  }
}
