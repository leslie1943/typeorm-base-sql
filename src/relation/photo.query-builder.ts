import { getRepository } from "typeorm";
import { Photo } from "../entity/Photo.entity";

export const photo_createQueryBuilder_OneToOne_meta = async () => {
  const repo_photo = await getRepository(Photo);
  const inner_join_photos = await repo_photo
    // .createQueryBuilder(alias?: string, queryRunner?: QueryRunner): SelectQueryBuilder<Photo>
    .createQueryBuilder("photo")
    // innerJoinAndSelect(property: string, alias: string, condition?: string, parameters?: ObjectLiteral)
    .innerJoinAndSelect("photo.metadata", "metadata")
    .getMany();
  console.info("use createQueryBuilder to get data", inner_join_photos);
  console.info("innerJoinAndSelect count", inner_join_photos.length);

  const left_join_photos = await repo_photo
    .createQueryBuilder("photo")
    .leftJoinAndSelect("photo.metadata", "metadata")
    .getMany();
  console.info("use createQueryBuilder to get data", left_join_photos);
  console.info("leftJoinAndSelect count", left_join_photos.length);
};

/**
 * >>>>> createQueryBuilder :: (alias?: string, queryRunner?: QueryRunner): SelectQueryBuilder<Photo>
 * 1.1 getRepository(EntityName)的时候已经知道了要操作的是那一个实体(Entity)
 * 1.2 此时创建 createQueryBuilder 也是根据这个实体(Photo)创建的查询
 * 1.3 只不过要为这个Entity起一个别名(alias),以操作其 Entity 的 Columns
 *
 * >>>>> innerJoinAndSelect(property: string, alias: string, condition?: string, parameters?: ObjectLiteral)
 * 2.1 property 要使用的 Entity Column(一定是Entity中定义的某个属性: Photo Entity中的 metata),
 * 2.2 此时需要用别名调用 photo.metadata, 然后再给这个property取个别名(metadata)
 *
 * >>>> innerJoin: 不以左表或者右表为基准,只返回符合条件的数据
 */
