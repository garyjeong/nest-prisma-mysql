import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(userId: Prisma.UsersWhereUniqueInput): Promise<User> {
    return this.prisma.users.findUnique({
      where: userId,
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UsersWhereUniqueInput;
    where?: Prisma.UsersWhereInput;
    orderBy?: Prisma.UsersOrderByWithRelationInput;
  }): Promise<User[]> {
    // findMany 옵션에 대해서 공부 필요
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.users.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.UsersCreateInput): Promise<User> {
    return this.prisma.users.create({ data });
  }

  async update(params: {
    where: Prisma.UsersWhereUniqueInput;
    data: Prisma.UsersUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.users.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.UsersWhereUniqueInput): Promise<User> {
    return this.prisma.users.delete({
      where,
    });
  }
}
