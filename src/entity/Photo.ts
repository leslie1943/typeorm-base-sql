import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { PhotoMetadata } from "./PhotoMetadata";
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
  /**
   * 关系可以是单向的或者是双向的。
   * 在没加下面的代码之前, Photo 和 PhotoMetadata是单向的.
   * 关系的所有者是 PhotoMetadata
   * 此时, Photo 对 PhotoMetadata 是一无所知的, 这使得从 Photo中访问PhotoMetadata变得很复杂.
   * 要解决这个问题, 在两者之间建立双向关系
   */
  @OneToOne((type) => PhotoMetadata, (photoMetadata) => photoMetadata.photo)
  metadata: PhotoMetadata; // metadata:元数据
}

/**
 * Step-1: @Entity()export class Photo {}: 创建一个数据库表
 * Step-2: 要添加数据库列,只需要将要生成的实体属性加上@Column装饰器
 */
