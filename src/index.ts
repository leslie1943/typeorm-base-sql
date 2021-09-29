import "reflect-metadata";
import { createConnection } from "typeorm";
import { createPhoto } from "./managers/photo";
import { createUser } from "./managers/user";

createConnection()
  .then(async (connection) => {
    await createPhoto(connection);
    await createUser(connection);
  })
  .catch((error) => console.log(error));
