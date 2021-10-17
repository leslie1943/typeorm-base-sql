import { getConnectionManager, getConnection } from "typeorm";

export const what_is_getConnectionManager = () => {
  /**
   * 获取存储所有已创建, 使用createConnection() 或 createConnections() 连接的管理器.
   */
  const defaultConnection = getConnectionManager();
  console.profile(
    " ~ file: get-connection-manager.ts ~ line 4 ~ defaultConnection "
  );
  console.info(
    "🚀 ~ file: get-connection-manager.ts ~ line 4 ~ defaultConnection ",
    defaultConnection
  );
};

export const what_is_getConnection = () => {
  // 获取使用createConnection方法创建的连接。
  const connect = getConnection();
  console.log(
    "🚀 ~ file: get-connection-manager.ts ~ line 20 ~ connect",
    connect
  );
};
