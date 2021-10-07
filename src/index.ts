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
  // respository_crud_photos,
} from "./repositories/photo";

// relation
import {
  photo_OneToOne_meta,
  photo_Both_OneToOne_meta,
  photo_createQueryBuilder_OneToOne_meta,
} from "./relation";

createConnection()
  .then(async (connection) => {
    console.info(
      " =============== Manager or Connection Start =============== "
    );
    // Users
    // await createUser(connection);
    // await findAllUsers(connection);

    // Photos
    // await createPhoto(connection);
    // await findAllPhoto(connection);
    // await findOnePhoto(connection);
    // await createPhotoByGetConnectionManager(); // getConnection
    // await createPhotoByGetManager(); // getManager
    console.info(
      " =============== Manager or Connection Finish =============== "
    );

    console.info(" =============== Repository Start  =============== ");
    // await repository_save_photos();
    // await repository_find_photos();
    // await respository_mulapi_photos();
    // await respository_crud_photos();
    console.info(" =============== Repository Finish =============== ");
    console.info(" =============== Relation save Start =============== ");
    await photo_OneToOne_meta();
    console.info(" =============== Relation Finish =============== ");

    console.info(
      " =============== Relation find by relations Start =============== "
    );
    await photo_Both_OneToOne_meta();
    console.info(
      " =============== Relation find by relations Finish =============== "
    );

    console.info(
      " =============== Relation by createQueryBuilder Start =============== "
    );
    await photo_createQueryBuilder_OneToOne_meta();
    console.info(
      " =============== Relation by createQueryBuilder Finish =============== "
    );
  })
  .catch((error) => console.log(error));
