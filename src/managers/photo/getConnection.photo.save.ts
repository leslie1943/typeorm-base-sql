import { getConnection } from "typeorm";
import { Photo } from "../../entity/Photo";

export const createPhotoByGetConnectionManager = async () => {
  // Phto
  console.info(
    "<<<<<<<<<<<<<< Photo save Entity by getConnection Start>>>>>>>>>>>>>>"
  );
  let photo = new Photo();
  photo.name = "Me and Bears";
  photo.description = "I am near polar bears";
  photo.filename = "photo-with-bears.jpg";
  photo.views = 1;
  photo.isPublished = true;
  const manager = getConnection().manager;
  await manager.save(photo);
  console.info(
    "<<<<<<<<<<<<<< Photo save Entity by getConnection Finish >>>>>>>>>>>>>>"
  );
};
