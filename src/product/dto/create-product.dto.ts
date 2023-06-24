import { Brand } from "../../brand/entities/brand.entity";

export class CreateProductDto {
  name: string;
  price: number;
  brand: Brand;
  category: string;
  tags?: string[];
}
