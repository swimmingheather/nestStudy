import { Column, Entity, ManyToOne } from "typeorm";
import { CommonEntity } from "../../commom.entity";
import { Content } from "../../content/entities/content.entity";
import { User } from "../../user/entities/user.entity";

@Entity()
export class Reply extends CommonEntity{
  @ManyToOne(
    () => Content,
    (content: Content) => content.replys
  )
  public content: Content;

  @Column()
  public user: string;

  @Column()
  public memo: string;


}
