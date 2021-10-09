import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Photo } from "./Photo.entity";

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  /**
   * 基于 @OneToMany((type) => Photo) 的解释
   * 1.1: 这里我们使用一个名为 @OneToMany 的修饰器,它允许我们在两个实体之间创建一对多的关系.
   * 1.2: type => Photo: 是一个函数, 返回我们想要与之建立关系的实体的类.
   * 1.3: 由于特定语言的关系(TypeScript), 我们只能使用一个返回类的函数, 而不是直接使用该类.
   * 1.4: 我们可以把它写成 () => Photo, 但是 type => Phtoo 显示代码更有可读性.
   * 1.5: type 变量本身不包含任何内容.
   *
   . 双向关系 
   * 2.1 photo => photo.author 用来指定反向关系的名称.
   * 2.2 Photo类的 <author> 属性是在Photo类中存储 Author 的地方
   * 
   */
  @OneToMany((type) => Photo, (photo) => photo.author)
  photos: Photo[]; // photos 元数据(不会生成列) 通过 photo 中的 author属性关联
}
