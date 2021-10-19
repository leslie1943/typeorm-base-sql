import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./User.entity";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  orderName: string;

  /**
   * 多对一 / 一对多的关系, 拥有方总是多对一的.
   * 这意味着使用 @ManyToOne 的类将存储相关对象(反向关系的)的id(User中的id)
   * 自动生成反向关系的id 无论是否使用 @JounColumn
   */
  @ManyToOne(() => User, (user) => user.orders)
  user: User; // 生成 userId 列
}
