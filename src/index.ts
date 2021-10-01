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

createConnection()
  .then(async (connection) => {
    // Users
    await createUser(connection);
    await findAllUsers(connection);

    // Photos
    await createPhoto(connection);
    await findAllPhoto(connection);
    await findOnePhoto(connection);
    await createPhotoByGetConnectionManager();
    await createPhotoByGetManager();
  })
  .catch((error) => console.log(error));
