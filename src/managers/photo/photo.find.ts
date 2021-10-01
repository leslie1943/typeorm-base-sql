import { Connection } from "typeorm";
import { Photo } from "../../entity/Photo";

export const findAllPhoto = async (connection: Connection) => {
  // Phto
  console.info("<<<<<<<<<<<<<< Photo find() Entity Start>>>>>>>>>>>>>>");
  const photos = await connection.manager.find(Photo);
  console.log("Loaded photos: ", photos);
  console.info("<<<<<<<<<<<<<< Photo find() Entity Finish >>>>>>>>>>>>>>");
};
