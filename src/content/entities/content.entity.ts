import { CommonEntity } from '../../commom.entity';
import { Column, Entity, OneToMany } from "typeorm";
import { Reply } from "../../reply/entities/reply.entity";

@Entity()
export class Content extends CommonEntity {
  @Column()
  public title: string;

  @Column()
  public description: string;

  @Column()
  public author: string; //Auther_id

  // @Column()
  // public productList: string;

  @OneToMany(
    () => Reply,
    (reply: Reply) => reply.content
  )
  public replys?: Reply[];
  //product id
}
