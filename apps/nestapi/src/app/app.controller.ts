import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { FcmService } from '@my-org/fcm-module';
import { Action, ClaimbasedService } from '@my-org/claimbased';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly fcmService: FcmService,
    private readonly caslAbilityFactory: ClaimbasedService
  ) {}

  @Get('/claim')
  getClaimBase() {
    const user = { id: 1, name: 'sabin', isAdmin: false };
    const article = { id: 2, isPublished: true, authorId: 2 };

    const ability = this.caslAbilityFactory.createForUser(user);
    const a = ability.can(Action.Read, article);
    const b = ability.can(Action.Delete, article);
    const c = ability.can(Action.Update, article);

    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
  }

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
