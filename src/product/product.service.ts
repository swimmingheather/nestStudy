import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";
import { string } from "@hapi/joi";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>
  ) {}
  async createProduct(createProductDto: CreateProductDto) {
    const newProduct = await this.productRepo.create(createProductDto)
    await this.productRepo.save(newProduct);
    return newProduct;
  }


  async getAllProducts(){
    const products = await this.productRepo.find({relations: ['brand']});
    return products;
  }

  async getProductById(productId: string){
    const product = await this.productRepo.findOneById(productId)
    return product;
  }

}
