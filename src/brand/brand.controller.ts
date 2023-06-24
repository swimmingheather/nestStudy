import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post('/create')
  async createBrand(@Body() createBrandDto: CreateBrandDto) {
    return await this.brandService.createBrand(createBrandDto);
  };



}
