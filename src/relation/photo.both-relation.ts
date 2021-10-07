import { getRepository } from "typeorm";
import { Photo } from "../entity/Photo";

export const photo_Both_OneToOne_meta = async () => {
  const repo_photo = await getRepository(Photo);
  let photos = await repo_photo.find({ relations: ["metadata"] });
  console.log("find photos with metadata", photos);
};
