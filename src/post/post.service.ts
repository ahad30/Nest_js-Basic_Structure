import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  create(data: CreatePostDto) {
    return this.prisma.post.create({ data });
  }

  findAll() {
    return this.prisma.post.findMany();
  }

  findOne(id: string) {
    return this.prisma.post.findUnique({ where: { id } });
  }

  update(id: string, data: CreatePostDto) {
    return this.prisma.post.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.post.delete({ where: { id } });
  }
}
