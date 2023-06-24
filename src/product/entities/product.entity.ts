import { CommonEntity } from '../../commom.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToOne } from "typeorm";
import { Brand } from '../../brand/entities/brand.entity';

@Entity()
export class Product extends CommonEntity {
  @Column()
  public name: string;

  @Column()
  public price: number;

  @ManyToOne(() => Brand, (brand: Brand) => brand.products)
  public brand: Brand; //brand id

  @Column()
  public category: string; //enum으로 해야할듯

  @Column('text', {array: true})
  public tags?: string[];


}
