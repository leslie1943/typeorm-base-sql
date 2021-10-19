import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Order } from "./Order.entity";

export enum UserRole {
  MANAGER = "manager",
  DEVELOPER = "developer",
  TESTER = "tester",
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.DEVELOPER,
  })
  role: UserRole;

  @OneToMany((type) => Order, (order) => order.user, { cascade: true })
  orders: Order[]; // orders (不会生成列) 通过 order 中的 user 属性关联
}
