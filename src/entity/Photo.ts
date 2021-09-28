import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Photo {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  filename: string;

  @Column()
  views: number;

  @Column()
  isPublished: boolean;
}

/**
 * Step-1: @Entity()export class Photo {}: 创建一个数据库表
 * Step-2: 要添加数据库列,只需要将要生成的实体属性加上@Column装饰器
 */
