import "reflect-metadata";
import { createConnection } from "typeorm";
import {
  createPhoto,
  findAllPhoto,
  findOnePhoto,
  createPhotoByGetConnectionManager,
  createPhotoByGetManager,
} from "./managers/photo";
import { createUser, findAllUsers } from "./managers/user";
// repository
import {
  repository_find_photos,
  repository_save_photos,
  respository_mulapi_photos,
  respository_crud_photos,
} from "./repositories/photo";

createConnection()
  .then(async (connection) => {
    console.info(" =============== Manager or Connection =============== ");
    // Users
    // await createUser(connection);
    // await findAllUsers(connection);

    // Photos
    // await createPhoto(connection);
    // await findAllPhoto(connection);
    // await findOnePhoto(connection);
    // await createPhotoByGetConnectionManager(); // getConnection
    // await createPhotoByGetManager(); // getManager
    console.info(" =============== Manager or Connection =============== ");

    console.info(" =============== Repository =============== ");
    // await repository_save_photos();
    // await repository_find_photos();
    // await respository_mulapi_photos();
    await respository_crud_photos();
    console.info(" =============== Repository =============== ");
  })
  .catch((error) => console.log(error));
