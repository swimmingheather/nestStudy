import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Brand } from "./entities/brand.entity";
import { Repository } from "typeorm";

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private brandRepo: Repository<Brand>,
  ) {}

  async createBrand(createBrandDto: CreateBrandDto){
    const newBrand = await this.brandRepo.create(createBrandDto);
    await this.brandRepo.save(newBrand);
    return {
      success: true,
      brand: newBrand,
    };
  }
}
