import { Module } from '@nestjs/common';
import { ReplyService } from './reply.service';
import { ReplyController } from './reply.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Reply } from "./entities/reply.entity";
import { ContentModule } from "../content/content.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Reply]),
    ContentModule
  ],
  controllers: [ReplyController],
  providers: [ReplyService]
})
export class ReplyModule {}
