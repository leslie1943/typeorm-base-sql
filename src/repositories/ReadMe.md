### Use Repository
- 每个实体都有自己的存储库, 可以处理其实体的所有操作
- Using `Repositories` is more convenient than `EntityManager` when deal with Entity

### 语法
```js
import { getRepository } from "typeorm";
import { Photo } from "../../entity/Photo";

getRepository(Photo) // API(EntityName)
```