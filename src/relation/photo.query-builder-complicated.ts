import { getRepository } from "typeorm";
import { Photo } from "../entity/Photo.entity";

export const photo_query_builder_complicated = async () => {
  const repo_photo = getRepository(Photo);
  const match_photos = await repo_photo
    .createQueryBuilder("photo")
    .innerJoinAndSelect("photo.metadata", "metadata")
    .leftJoinAndSelect("photo.albums", "album")
    .where("photo.isPublished = true")
    // .andWhere(
    //   "photo.name LIKE '% :photoName %' OR photo.name LIKE '% :bearName %'"
    // )
    .orderBy("photo.id", "DESC")
    // .skip(5)
    // .take(10)
    .setParameters({ photoName: "My", bearName: "Mishka" })
    .getMany();
  console.log(
    "🚀 ~ photo_query_builder_complicated= ~ match_photos",
    match_photos
  );
};

/**
    此查询选择所有符合下列条件的Photos
        1.published = true
        2.name 等于 My 或者
        3.name 等于 Mishka
        4.从结果中的第5个开始
        5.选择10个
        6.按ID降序排列
        7.albums将被left join
        8.metadata将被 innder join
 */
