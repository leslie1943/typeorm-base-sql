import { getRepository } from "typeorm";
import { Order } from "../../entity/Order.entity";
import { User } from "../../entity/User.entity";

export const create_order_repo = async () => {
  const repo_order = await getRepository(Order);
  const repo_user = await getRepository(User);
  const user = await repo_user.findOne(1);

  const order = new Order();
  order.orderName = "first order";
  order.user = user;
  await repo_order.save(order);

  // user.order = order;
  // await repo_user.save(user);
};
