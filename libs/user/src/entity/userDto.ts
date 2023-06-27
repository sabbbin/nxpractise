import { IsInt, IsString } from 'class-validator';

export class UserDto {
  @IsInt()
  id: number | undefined;

  @IsString()
  email: string | undefined;

  @IsString()
  username: string | undefined;
}
