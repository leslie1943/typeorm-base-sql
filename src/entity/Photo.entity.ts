import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  ManyToMany,
} from "typeorm";
import { PhotoMetadata } from "./PhotoMetadata.entity";
import { Author } from "./Author.entity";
import { Album } from "./Album.entity";
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

  @Column({ nullable: true })
  test: string;

  @Column("double")
  views: number;

  @Column()
  isPublished: boolean;
  /**
   * 关系可以是单向的或者是双向的。
   * 在没加下面的代码之前, Photo 和 PhotoMetadata 是单向的.
   * 关系的所有者是 PhotoMetadata
   * 此时, Photo 对 PhotoMetadata 是一无所知的, 这使得从 Photo中访问PhotoMetadata变得很复杂.
   * 要解决这个问题, 在两者之间建立双向关系
   */
  @OneToOne((type) => PhotoMetadata, (photoMetadata) => photoMetadata.photo, {
    cascade: true,
  })
  metadata: PhotoMetadata; // metadata:元数据(不会生成列)

  /**
   * type => Author: 是一个函数, 返回我们想要与之建立关系的实体的类.
   * 
   . 双向关系 
   * author => author.photos 用来指定反向关系的名称.
   * Author 类的 <photos> 属性是在 Author 类中存储 photos 的地方
   * 
   * 多对一 / 一对多的关系, 拥有方总是多对一的.
   * 这意味着使用 @ManyToOne 的类将存储相关对象(反向关系的)的id(Author中的id)
   * ORM 将创建 author 表, 并且修改 photo 表, 添加新的 author列并为其创建外键.
   */
  @ManyToOne((type) => Author, (author) => author.photos)
  author: Author; // authorId

  // 相对于 Albums, 添加反向关系到 Photo类
  @ManyToMany((type) => Album, (album) => album.photos)
  albums: Album[];
}

/**
 * Step-1: @Entity()export class Photo {}: 创建一个数据库表
 * Step-2: 要添加数据库列,只需要将要生成的实体属性加上@Column装饰器
 */
