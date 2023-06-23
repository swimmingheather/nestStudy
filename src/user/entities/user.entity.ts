import { Column, Entity } from 'typeorm';
import { CommonEntity } from '../../commom.entity';

@Entity()
export class User extends CommonEntity {
  @Column()
  email: string;
}
