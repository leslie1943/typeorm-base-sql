import { Connection } from "typeorm";
import { Photo } from "../../entity/Photo.entity";

export const createPhoto = async (connection: Connection) => {
  // Phto
  console.info("<<<<<<<<<<<<<< Photo save Entity Start>>>>>>>>>>>>>>");
  let photo = new Photo();
  photo.name = "Me and Bears";
  photo.description = "I am near polar bears";
  photo.filename = "photo-with-bears.jpg";
  photo.views = 1;
  photo.isPublished = true;
  await connection.manager.save(photo);
  console.info("<<<<<<<<<<<<<< Photo save Entity Finish >>>>>>>>>>>>>>");
};
