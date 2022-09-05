import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ResUserDataDto, ReqUserDataDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  async GetUser(@Body() userId: string): Promise<ResUserDataDto> {
    return this.userService.user({ id: userId });
  }

  @Get('all')
  async GetUserAll(): Promise<ResUserDataDto[]> {
    return this.userService.users({});
  }

  @Post('')
  async CreateUser(@Body() user: ReqUserDataDto): Promise<ResUserDataDto> {
    return this.userService.create(user);
  }

  @Patch('')
  async UpdateUser(@Body() user: ReqUserDataDto): Promise<ResUserDataDto> {
    return this.userService.update({
      where: { id: user.id },
      data: {
        email: user.email,
        username: user.username,
      },
    });
  }

  @Delete('')
  async DeleteUser(@Body() userId: string): Promise<ResUserDataDto> {
    return this.userService.delete({ id: userId });
  }
}
