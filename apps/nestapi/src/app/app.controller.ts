import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { FcmService } from '@my-org/fcm-module';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly fcmService: FcmService
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
  @Get('notification')
  sendNotification() {
    return this.fcmService.sendNotification(
      process.env.DEVICETOKEN,
      {
        notification: {
          title: 'helo',
          body: 'this is test messt',
        },
      },
      true
    );
  }
}
