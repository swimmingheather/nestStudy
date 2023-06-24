import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReplyService } from './reply.service';
import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';
import { Content } from "../content/entities/content.entity";

@Controller('reply')
export class ReplyController {
  constructor(private readonly replyService: ReplyService) {}

  //대상자: content id
  @Post('/:contentId')
  async createReplyByContentId(
    @Param('contentId') contentId: Content,
    @Body() createReplyDto: CreateReplyDto
  ){
    return await this.replyService.createReply(contentId, createReplyDto)
  }

  @Get()
  async getAllReply(){
    return await this.replyService.getAllReply();
  }

  @Get('/:contentId')
  async getReplyByContentId(@Param('contentId') contentId: string){
    return await this.replyService.getReplyByContentId(contentId);
  }
}
