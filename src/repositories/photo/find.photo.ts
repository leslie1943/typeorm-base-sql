import { getRepository } from "typeorm";
import { Photo } from "../../entity/Photo";

export const repository_find_photos = async () => {
  // Get Photo repository
  const repository_photo = getRepository(Photo);
  const allSavedPhotos = await repository_photo.find();
  console.log(
    "allSavedPhotos be found in database by get Repository",
    allSavedPhotos
  );
};
