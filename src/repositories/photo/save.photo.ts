import { getRepository } from "typeorm";
import { Photo } from "../../entity/Photo";

export const repository_save_photos = async () => {
  // Phto
  console.info("<<<<<<<<<<<<<< Photo save Entity Start>>>>>>>>>>>>>>");
  let photo = new Photo();
  photo.name = "Me and Bears";
  photo.description = "I am near polar bears";
  photo.filename = "photo-with-bears.jpg";
  photo.views = 1;
  photo.isPublished = true;

  // Get Photo repository
  const repository_photo = getRepository(Photo);
  repository_photo.save(photo);
  console.info("Photo has been saved.");
};
