import { CommonEntity } from '../../commom.entity';
import { Column } from 'typeorm';

export class Product extends CommonEntity {
  @Column()
  brandId: number; //brand id

  @Column()
  category: string; //enum으로 해야할듯
}
