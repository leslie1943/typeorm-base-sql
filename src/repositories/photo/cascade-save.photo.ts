import { getRepository } from "typeorm";
import { Photo } from "../../entity/Photo";
import { PhotoMetadata } from "../../entity/PhotoMetadata";

export const photo_cascade_save = async () => {
  const repo_photo = await getRepository(Photo);

  // create Photo
  let photo = new Photo();
  photo.name = "cascade name";
  photo.description = "cascade name desc";
  photo.filename = "cascade name.jpg";
  photo.isPublished = true;
  photo.views = 0;

  // create photo meta
  let metadata = new PhotoMetadata();
  metadata.height = 660;
  metadata.width = 480;
  metadata.compressed = true;
  metadata.comment = "cascade comment";
  metadata.orientation = "cascade orientation";

  // connect them, use the cascade config
  photo.metadata = metadata;

  await repo_photo.save(photo);
  console.log("Photo is saved, photo metadata is saved too.");
};

/**
 * 由于在 Photo Entity 中 对于 @OneToOne Column 加入了 cascade 配置
 * @OneToOne((type) => PhotoMetadata, (photoMetadata) => photoMetadata.photo, {cascade: true,})
  metadata: PhotoMetadata;

  -------------------------- 在添加 cascade的一侧的实例使用
  photo.metadata = metadata;
 */

/**
  // create Photo
  let photo = new Photo();
  photo.name = "OneToOne name";
  photo.description = "OneToOne name desc";
  photo.filename = "OneToOne name.jpg";
  photo.isPublished = true;
  photo.views = 0;

  // create photo meta
  let metadata = new PhotoMetadata();
  metadata.height = 660;
  metadata.width = 480;
  metadata.compressed = true;
  metadata.comment = "cybershoot";
  metadata.orientation = "portait";
  metadata.photo = photo; // ✅✅ 区别于 cascade

  // 先保存 photo
  await repo_photo.save(photo);
  // 再保存 photo 的 metadata
  await repo_meta.save(metadata);
};
 */
