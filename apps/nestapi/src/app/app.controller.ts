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
    return this.fcmService.sendNotification(
      `cU8pTK12byXV87DdNJdE4-:APA91bEkJprmQMwS3wB17cQJPGmEebx-1-yPH2I0ZkCnUkxxsZq6PvRaYWqw7Yqh89tjKkZFZ_Ks-TcSi9DSrVduoXDrDSi4Iy_Or0uZqXAr6lJ0_ZaG4xG2QD8PFQZ7S3mCREAm-j0X`,
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
