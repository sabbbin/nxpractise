import { DynamicModule, Logger, Module, ValueProvider } from '@nestjs/common';
import { FcmOptions } from './fcm.options.interface';
import { FCM_OPTIONS } from './fcm.constant';
import { FcmService } from './fcm.service';

@Module({})
export class FcmModuleModule {
  static forRoot(options: FcmOptions): DynamicModule {
    const optionsProvider: ValueProvider = {
      provide: FCM_OPTIONS,
      useValue: options,
    };

    const logger = options.logger ? options.logger : new Logger('FcmServe');
    return {
      module: FcmModuleModule,
      providers: [
        {
          provide: Logger,
          useValue: logger,
        },
        FcmService,
        optionsProvider,
      ],
      exports: [FcmService],
    };
  }
}
