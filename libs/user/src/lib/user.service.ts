import { NotificationService } from '@my-org/notification';
import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { UserDto } from '../entity/userDto';

@Injectable()
export class UsersService {
  constructor(
    // @Inject('knexProvider') private readonly knex: Knex,
    private readonly notificationService: NotificationService
  ) {}
  create(user: UserDto) {
    //   return this.knex('user').insert(user);
    // }
    // async updateProfile(user_id: any, update_dto: any) {
    //   try {
    //     const user = await this.knex('user').where({ id: user_id });
    //     if (user) {
    //       await this.knex('user').insert({
    //         update_dto,
    //         username: update_dto.username,
    //         email: update_dto.email,
    //       });
    //       await this.notificationService.sendPush(
    //         user,
    //         'profileUpdate',
    //         'your profile upated successfully'
    //       );
    //     }
    //   } catch (err) {
    //     throw new Error('erro in updating profile' + err);
    //   }
  }
}
