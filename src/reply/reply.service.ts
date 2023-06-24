import { Injectable } from '@nestjs/common';
import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Reply } from "./entities/reply.entity";
import { Repository } from "typeorm";
import { ContentService } from "../content/content.service";
import { Content } from "../content/entities/content.entity";

@Injectable()
export class ReplyService {
  constructor(
    @InjectRepository(Reply)
    private replyRepo: Repository<Reply>,
    private readonly contentService: ContentService,
  ) {}

  async createReply(contentId: Content, createReplyDto: CreateReplyDto){
    // const content= await this.contentService.getContentById(contentId);
    const newReply = await this.replyRepo.create({
      ...createReplyDto,
      content: contentId,

    })
    await this.replyRepo.save(newReply);
    return newReply;
  }

  async getAllReply(){
    const reply = await this.replyRepo.find({relations: ['content']});
    return reply;
  }

  async getReplyByContentId(contentId: string){
    // const content = await this.contentService.getContentById(contentId);
    // await this.replyRepo.findOneBy({content: content})
    // const replys = await this.getAllReply();
    // // console.log("+++++++++++++++++++++++++++++++++", replys[].)
    // if (replys){
    //   const filteredReply = await replys.filter(reply => reply.content.id === contentId);
    //   return filteredReply;
    // }
    //
    // return 'empty';

  }


}
