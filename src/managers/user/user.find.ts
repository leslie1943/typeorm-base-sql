import { Connection } from "typeorm";
import { User } from "../../entity/User";

export const findAllUsers = async (connection: Connection) => {
  //   ------------ User
  console.info("<<<<<<<<<<<<<< User find Entity Start >>>>>>>>>>>>>>");
  const users = await connection.manager.find(User);
  console.log("Loaded users: ", users);
  console.info("<<<<<<<<<<<<<< User find Entity Finish >>>>>>>>>>>>>>");
};
