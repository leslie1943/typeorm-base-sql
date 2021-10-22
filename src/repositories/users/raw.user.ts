import { getRepository, getConnectionManager, getConnection } from "typeorm";
import { User } from "../../entity/User.entity";

/**
 * const query = `
      SELECT
        u.firstName "first",
        u.lastName "last",
      FROM
        ap129160.user u
 */

export const raw_sql_user_query = async () => {
  const manager = getConnection().manager;
  const query = " SELECT firstName, lastName  FROM `user`";
  const data = await manager.query(query);
  console.log(
    "🚀 ~ file: raw.user.ts ~ line 22 ~ constrepo_distinct_user= ~ data",
    data
  );
};

/**
 *  const query = `
      SELECT 
        bbbb.ID "id",
        bbbb.NAME "name",
        bbbb.CODE "code",
        bbbb.FNAME "fdName",
        bbbb.GR_CODE "grcode",
        bbbb.STATUS "status"
      FROM
        AAAAAA.xxxxxxxxxxxxxx bbbb
      WHERE
        orgtl.STATUS = 'A' AND LOWER(FNAME) LIKE '%${keyword.toLowerCase()}%'
    `;
 */
