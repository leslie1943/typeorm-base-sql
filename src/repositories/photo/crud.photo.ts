import { getRepository } from "typeorm";
import { Photo } from "../../entity/Photo";

export const respository_crud_photos = async () => {
  const repos = getRepository(Photo);
  const firstPhoto = await repos.findOne(1);
  firstPhoto.filename = "Just do it";
  await repos.save(firstPhoto);

  const toDelPhoto = await repos.findOne(12);
  await repos.remove(toDelPhoto);
};
