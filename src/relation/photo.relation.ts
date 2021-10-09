import { getRepository } from "typeorm";
import { Photo } from "../entity/Photo.entity";
import { PhotoMetadata } from "../entity/PhotoMetadata.entity";

export const photo_OneToOne_meta = async () => {
  const repo_photo = await getRepository(Photo);
  const repo_meta = await getRepository(PhotoMetadata);

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
  metadata.photo = photo; // 区别于 cascade

  // 先保存 photo
  await repo_photo.save(photo);

  // 再保存 photo 的 metadata
  await repo_meta.save(metadata);

  console.log(
    "Metadata is saved, and relation between metadata and photo is created in the database too"
  );
};
