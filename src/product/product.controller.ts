import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // product등록 api
 @Post('create')
  async createProduct(@Body() createProductDto: CreateProductDto){
    return await this.productService.createProduct(createProductDto);
 }

 //product 전체 목록 조회
 @Get()
  async getAllProducts(){
    return await this.productService.getAllProducts();
 }

 //product 상세 조회(id기준)
  @Get('/:productId')
  async getProductById(@Param('productId') productId: string){
    return await this.productService.getProductById(productId);
  }



}
