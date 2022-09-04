import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ResUserDataDto, ReqUserDataDto } from './user.dto';

@Controller('user')
export class UserController {
  @Get('')
  async GetUser(@Body() userId: string): Promise<ResUserDataDto> {}

  @Get('all')
  async GetUserAll(): Promise<ResUserDataDto[]> {}

  @Post('')
  async CreateUser(@Body() user: ReqUserDataDto): Promise<ResUserDataDto> {}

  @Patch('')
  async UpdateUser(@Body() user: ReqUserDataDto): Promise<ResUserDataDto> {}

  @Delete('')
  async DeleteUser(@Body() userId: string): Promise<Boolean> {}
}
