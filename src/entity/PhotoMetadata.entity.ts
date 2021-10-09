import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Photo } from "./Photo.entity";

@Entity()
export class PhotoMetadata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  height: number;

  @Column("int")
  width: number;

  @Column()
  orientation: string;

  @Column()
  compressed: boolean;

  @Column()
  comment: string;

  /**
   * 基于 @OneToOne((type) => Photo) 的解释
   * 1.1: 这里我们使用一个名为 @OneToOne 的修饰器,它允许我们在两个实体之间创建一对一的关系.
   * 1.2: type => Photo: 是一个函数, 返回我们想要与之建立关系的实体的类.
   * 1.3: 由于特定语言的关系(TypeScript), 我们只能使用一个返回类的函数, 而不是直接使用该类.
   * 1.4: 我们可以把它写成 () => Photo, 但是 type => Phtoo 显示代码更有可读性.
   * 1.5: type 变量本身不包含任何内容.
   *
   * 2.1 我们还添加了一个 @JoinColumn 装饰器, 表明实体键的对应关系.
   * 2.2 关系可以是单向的或者是双向的.
   * 2.3 但是只有一方是拥有者, 在关系的所有者方面需要使用 @JoinCoulmn 装饰器
   *
   * 3.0 双向关系 Update
   * photo => photo.metadata 用来指定反向关系的名称.
   * Photo类的 <metadata> 属性是在Photo类中存储 PhotoMetadata的地方
   *
   * 3.1 仅在关系一侧使用 @JoinColumn 装饰器, 这个装饰者放在哪一方将是这段关系的拥有者.
   * 关系的拥有方包含数据库中具有外键的列.
   */
  @OneToOne((type) => Photo, (photo) => photo.metadata)
  @JoinColumn()
  photo: Photo; // 使用了 @JoinColumn 会生成 photoId 列
}
