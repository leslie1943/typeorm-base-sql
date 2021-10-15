import { getRepository } from "typeorm";
import { User, UserRole } from "../../entity/User.entity";

export const repo_save_user = async () => {
  const repo = await getRepository(User);
  const user = new User();
  user.firstName = "Brad";
  user.lastName = "Peter";
  user.age = 40;
  await repo.save(user);
  console.info("Insert new user with default role", user);

  const users = await repo.find();
  users.forEach((item) => {
    if (item.id % 2 === 0) {
      item.role = UserRole.MANAGER;
      repo.save(item);
    }
  });
};
