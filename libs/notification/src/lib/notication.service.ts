import { Inject, Injectable } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import { Knex } from 'knex';
import path = require('path');

firebase.initializeApp({
  credential: firebase.credential.cert(
    path.join(__dirname, '..', 'firebase-adminsdk.json')
  ),
});

@Injectable()
export class NotificationService {

  // acceptPushNotification = async (user: any, notificationTokenRepo: any) => {
  //   await this.knex('notification_token')
  //     .update({ status: 'inactive' })
  //     .where({ user_id: user.id });

  //   const notification_token = await this.knex('notification_token').insert({
  //     user_id: user.id,
  //     device_type: notificationTokenRepo.device_type,
  //     notification_token: notificationTokenRepo.notification_token,
  //     status: 'active',
  //   });

  //   return notification_token;
  // };

  // disablePushNotification = async (
  //   user: any,
  //   update_dto: any
  // ): Promise<void> => {
  //   try {
  //     await this.knex('notification_token').update({
  //       user_id: user.id,
  //       device_type: update_dto.device_type,
  //       status: 'inactive',
  //     });
  //   } catch (err) {
  //     throw new Error('error ' + err);
  //   }
  // };

  // getNotifications = async (): Promise<any> => {
  //   return await this.knex('notification').select();
  // };

  sendPush = async (user: any, title: string, body: string): Promise<void> => {
    // try {
      // const notification: any = await this.knex('notification_token').where({
      //   user_id: user.id,
      //   status: 'inactive',
      // });

      // if (notification) {
        // await this.knex('notification_token').insert({
        //   notification_token_id: user.id,
        //   title,
        //   body,
        //   status: 'active',
        //   created_by: user.username,
        // });
        await firebase.messaging().send({
          notification: { title, body },
          token: notification.notification_token,
          android: { priority: 'high' },
        });
      // }
    // } catch (err) {
    //   throw new Error('erro in notification push' + err);
    // }
  };
}
