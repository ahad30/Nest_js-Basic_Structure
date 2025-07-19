// app.module.ts
import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { PrismaService } from 'prisma/prisma.service';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PostModule,PrismaModule],
  providers: [PrismaService],
})
export class AppModule {}
