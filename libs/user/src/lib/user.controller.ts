import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller()
export class userController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async CreateUser(@Body() user: any) {
    return this.usersService.create(user);
  }

  @Put()
  async updateProfile(@Body() user: any, @Param('id') user_id: number) {
    return this.usersService.updateProfile(user_id, user);
  }
}
