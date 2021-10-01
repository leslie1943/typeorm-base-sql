import { Connection } from "typeorm";
import { User } from "../../entity/User";

export const createUser = async (connection: Connection) => {
  console.info("<<<<<<<<<<<<<< User save Entity Start >>>>>>>>>>>>>>");
  const user = new User();
  user.firstName = "Timber";
  user.lastName = "Saw";
  user.age = 25;
  await connection.manager.save(user);
  console.log("Saved a new user with id: " + user.id);
  console.info("<<<<<<<<<<<<<< User save Entity Finish >>>>>>>>>>>>>>");
};
