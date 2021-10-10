/**
 * 一个 photo 可以放在多个 albums中, 每个 albums中可以包含多个photo
 */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Photo } from "./Photo.entity";

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany((type) => Photo, (photo) => photo.albums)
  @JoinTable() // JoinTable指定这是关系的所有者方
  photos: Photo[];
}

// 运行后会创建 album_photos_photo_albums 表
