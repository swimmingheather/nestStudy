import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContentService } from './content.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}


  @Post('create')
  async createContent(@Body() createContentDto: CreateContentDto) {
    return await this.contentService.createContent(createContentDto);
  }

  @Get()
  async getAllContent(){
    return await this.contentService.getAllContent();
  }
}
