import { getRepository } from "typeorm";
import { Photo } from "../../entity/Photo.entity";

export const repository_find_photos = async () => {
  // Get Photo repository
  const repository_photo = getRepository(Photo);
  // const allSavedPhotos = await repository_photo.find();
  // console.log(
  //   "allSavedPhotos be found in database by get Repository",
  //   allSavedPhotos
  // );

  const singlePhoto = await repository_photo.findOne({
    select: ["name"], // get name only
    where: { id: 38 },
  });
  if (singlePhoto) {
    console.info("find something.");
    console.log(
      "🚀 ~ file: find.photo.ts ~ line 17 ~ constrepository_find_photos= ~ singlePhoto",
      singlePhoto
    );
  } else {
    throw new Error("No data found");
  }
};
