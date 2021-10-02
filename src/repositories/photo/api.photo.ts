import { getRepository } from "typeorm";
import { Photo } from "../../entity/Photo";

export const respository_mulapi_photos = async () => {
  const photoRepository = getRepository(Photo);

  const allFindPhotos = await photoRepository.find();
  console.log("All photos from the db:", allFindPhotos);

  const firstPhoto = await photoRepository.findOne();
  console.log("First photo from the db:", firstPhoto);

  const meAndBearsPhoto = await photoRepository.findOne({
    name: "Me and Bears - 10",
  });
  console.log("All viewed photos:", meAndBearsPhoto);

  const allPublishedPhotos = await photoRepository.find({ isPublished: true });
  console.log("All published photos:", allPublishedPhotos);

  const [allPhotos, photosCount] = await photoRepository.findAndCount();
  console.log("All  photos:", allPhotos);
  console.log("Photos count: ", photosCount);
};
