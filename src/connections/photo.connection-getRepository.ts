import { getConnection, getRepository } from "typeorm";
import { Photo } from "../entity/Photo.entity";

export const photo_connection_getRepository = async () => {
  let photos = await getConnection()
    .getRepository(Photo)
    .findAndCount({ where: { id: 1 } });
  console.log("getConnection().getRepository(Photo)", photos);

  const repo = await getRepository(Photo);
  const d_photos = await repo.find();
  console.log("getRepository(Photo) directly", d_photos);
};
