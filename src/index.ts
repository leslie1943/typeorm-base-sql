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
  photo_cascade_save,
} from "./repositories/photo";

import {
  repo_save_user,
  repo_distinct_user,
  raw_sql_user_query,
} from "./repositories/users";

// relation
import {
  photo_OneToOne_meta,
  photo_Both_OneToOne_meta,
  photo_createQueryBuilder_OneToOne_meta,
  photo_many_2_many_album,
  photo_query_builder_complicated,
} from "./relation";

// connection
import {
  photo_connection_createQueryBuilder,
  photo_connection_getRepository,
} from "./connections";

import {
  what_is_getConnectionManager,
  what_is_getConnection,
} from "./built-in";

import { create_order_repo } from "./repositories/orders";

createConnection()
  .then(async (connection) => {
    console.info(">>Manager or Connection Start>>");
    // Users
    // await createUser(connection);
    // await findAllUsers(connection);

    // Photos
    // await createPhoto(connection);
    // await findAllPhoto(connection);
    // await findOnePhoto(connection);
    // await createPhotoByGetConnectionManager(); // getConnection
    // await createPhotoByGetManager(); // getManager
    console.info(">>Manager or Connection Finish>>");

    console.info(">>Repository Start >>");
    // await repository_save_photos();
    await repository_find_photos();
    // await respository_mulapi_photos();
    // await respository_crud_photos();
    console.info(">>Repository Finish>>");
    console.info(">>Relation save Start>>");
    // await photo_OneToOne_meta();
    console.info(">>Relation Finish>>");

    console.info(">>Relation find by relations Start>>");
    // await photo_Both_OneToOne_meta();
    console.info(">>Relation find by relations Finish>>");

    console.info(">>Relation by createQueryBuilder Start>>");
    // await photo_createQueryBuilder_OneToOne_meta();
    console.info(">>Relation by createQueryBuilder Finish>>");

    console.info(">>Cascade save Start>>");
    // await photo_cascade_save();
    console.info(">>Cascade save Finish>>");

    console.info(">>Photo ManyToMany Album Start>>");
    // await photo_many_2_many_album();
    console.info(">>Photo ManyToMany Album Finish>>");
    console.info(">>complicated query builder Start>>");
    // await photo_query_builder_complicated();
    console.info(">>complicated query builder Finish>>");

    console.info(">>complicated query builder Start>>");
    // await photo_connection_createQueryBuilder();
    // await photo_connection_getRepository();
    console.info(">>complicated query builder Start>>");

    console.info(
      ">>Create new user and Find Distinct User and cache in 1min Start>>"
    );
    // await repo_save_user();

    // setInterval(async () => {
    //   const distinctUsers: { firstName: string }[] = await repo_distinct_user();
    //   console.info("distinctUsers", distinctUsers);
    //   distinctUsers.forEach((item) => {
    //     console.info(item.firstName);
    //   });
    // }, 10000);

    console.info(
      ">>Create new user and Find Distinct User and cache in 1min Finish>>"
    );

    console.info("  built-in-api: getConnectionManager  ");
    // await what_is_getConnectionManager();
    // await what_is_getConnection();
    console.info("  built-in-api: getConnectionManager  ");

    console.info("  Order API Start  ");
    // await create_order_repo();
    console.info("  Order API Start  ");

    console.info("  Raw SQL API Start  ");
    // await raw_sql_user_query();
    console.info("  Raw SQL API Start  ");
  })
  .catch((error) => console.log(error));
