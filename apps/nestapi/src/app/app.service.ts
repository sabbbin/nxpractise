import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import * as admin from 'firebase-admin';
import { InjectNodeMailer } from '@my-org/nodemailer';

@Injectable()
export class AppService {
  constructor(@InjectNodeMailer() private readonly nodeMailer) {}
  getData(): { message: string } {
    this.nodeMailer.sendMail({
      to: process.env.EMAIL_EMAILTO,
      subject: 'helo',
      text: 'helo',
    });
    return { message: 'Hello API' };
  }
}
