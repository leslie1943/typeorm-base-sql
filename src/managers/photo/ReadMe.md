###  getConnection.manager
```js
import { getConnection } from "typeorm";
const manager = getConnection().manager;
await manager.save(photo);
```

###  getConnection.manager
```js
import { getManager } from "typeorm";
const manager = getManager();
await manager.save(photo);
```