import { CommonEntity } from "../../commom.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { Product } from "../../product/entities/product.entity";
@Entity()
export class Brand extends CommonEntity{
  @Column()
  public name: string;

  @Column()
  public description: string;

  @OneToMany(
    () => Product,
    (product: Product) => product.brand
  )
  public products: Product[];
}
