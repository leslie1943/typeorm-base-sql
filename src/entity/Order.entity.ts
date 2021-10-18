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

  @ManyToOne(() => User, (user) => user.order)
  @JoinColumn()
  user: User;
}
