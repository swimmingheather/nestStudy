import { CommonEntity } from '../../commom.entity';
import { Column } from 'typeorm';

export class Content extends CommonEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  Auther: string; //Auther_id

  @Column()
  productList: [string]; //product id
}
