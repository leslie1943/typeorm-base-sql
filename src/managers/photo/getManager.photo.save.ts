import { getManager } from "typeorm";
import { Photo } from "../../entity/Photo";

export const createPhotoByGetManager = async () => {
  // Phto
  console.info(
    "<<<<<<<<<<<<<< Photo save Entity by getManager Start>>>>>>>>>>>>>>"
  );
  let photo = new Photo();
  photo.name = "Me and Bears";
  photo.description = "I am near polar bears";
  photo.filename = "photo-with-bears.jpg";
  photo.views = 1;
  photo.isPublished = true;
  const manager = getManager();
  await manager.save(photo);
  console.info(
    "<<<<<<<<<<<<<< Photo save Entity by getManager Finish >>>>>>>>>>>>>>"
  );
};
