import { Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Content } from "./entities/content.entity";
import { Repository } from "typeorm";

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private contentRepo: Repository<Content>
  ) {}

  async createContent(createContentDto: CreateContentDto){
    const newContent = await this.contentRepo.create(createContentDto);
    await this.contentRepo.save(newContent);
    return newContent;
  }

  async getContentById(contentId: string){
    const content = await this.contentRepo.findOneById(contentId);
    return content;
  }

  async getAllContent(){
    const content = await this.contentRepo.find();
    return content;
  }


}
