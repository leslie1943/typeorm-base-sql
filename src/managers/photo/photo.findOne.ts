import { Connection } from "typeorm";
import { Photo } from "../../entity/Photo.entity";

export const findOnePhoto = async (connection: Connection) => {
  console.info("<<<<<<<<<<<<<< Photo findOne Entity Start>>>>>>>>>>>>>>");
  const photo = await connection.manager.findOne(Photo, { id: 2 });
  console.log("findOne: ", photo);
  console.info("<<<<<<<<<<<<<< Photo findOne Entity Finish >>>>>>>>>>>>>>");
};
