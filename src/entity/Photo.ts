import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column("text")
  description: string;

  @Column()
  filename: string;

  @Column("double")
  views: number;

  @Column()
  isPublished: boolean;
}

/**
 * Step-1: @Entity()export class Photo {}: 创建一个数据库表
 * Step-2: 要添加数据库列,只需要将要生成的实体属性加上@Column装饰器
 */
