import { getConnection } from "typeorm";
import { Photo } from "../entity/Photo.entity";

export const photo_connection_createQueryBuilder = async () => {
  let photos = await getConnection()
    .createQueryBuilder()
    .select("photo")
    // .select()
    .from(Photo, "photo")
    .where("photo.id = :photoId", { photoId: 1 })
    .getMany();
  console.log("connection to get photos", photos);
};
