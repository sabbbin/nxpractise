import { Inject, Injectable } from '@nestjs/common';
import { FCM_OPTIONS } from './fcm.constant';
import { FcmOptions } from './fcm.options.interface';
import * as firebasAdmin from 'firebase-admin';

@Injectable()
export class FcmService {
  constructor(@Inject(FCM_OPTIONS) private fcmOptionProvider: FcmOptions) {
    if (firebasAdmin.apps.length == 0) {
      firebasAdmin.initializeApp({
        credential: firebasAdmin.credential.cert(
          './notification-604b2-firebase-adminsdk-ahuw5-3e8a5fcc3b.json'
        ),
      });
    }
  }
  async sendNotification(
    deviceId: string,
    payload: firebasAdmin.messaging.MessagingPayload,
    silent: boolean
  ) {
    if (!deviceId) {
      throw new Error('you do not provide deviceid');
    }
    console.log(deviceId, payload);
    const result = await firebasAdmin
      .messaging()
      .send({
        token: deviceId,
        notification: {
          title: payload.notification.title,
          body: payload.notification.body,
        },
      })
      .then((res) => {
        console.log('re', res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
    console.log('result', result);
  }
}
