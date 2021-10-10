import { getRepository } from "typeorm";
import { Album } from "../entity/Album.entity";
import { Photo } from "../entity/Photo.entity";

export const photo_many_2_many_album = async () => {
  const repo_album = getRepository(Album);
  const album1 = new Album();
  album1.name = "Dora";
  await repo_album.save(album1); // must await

  const album2 = new Album();
  album2.name = "Mark";
  await repo_album.save(album2); // must await

  const repo_photo = getRepository(Photo);
  const photo = new Photo();
  photo.name = "Photo Name of Dora and Mark";
  photo.description = "Photo Desc of Dora and Mark";
  photo.filename = "love.png";
  photo.views = 1;
  photo.isPublished = true;
  photo.albums = [album1, album2];
  await repo_photo.save(photo); // must await

  // now photo is saved and albums are attatched to it

  const loadedPhoto = await repo_photo.find({
    // where: { name: "Photo Name of Dora and Mark" },
    // relations: ["albums", "author", "metadata"],
    relations: ["albums"],
  });
  console.log("🚀 ~ file: photo_many_2_many_album= ~ loadedPhoto", loadedPhoto);
};
