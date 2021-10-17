import { getRepository } from "typeorm";
import { User } from "../../entity/User.entity";

export const repo_distinct_user = async () => {
  const repo = await getRepository(User);
  const users = await repo
    .createQueryBuilder("user")
    .select("user.firstName", "firstName")
    .distinct()
    .cache(60000)
    .getRawMany();

  console.info("distinct users", users);
  return users;
};
