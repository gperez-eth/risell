import "reflect-metadata";

import { getConnection } from "#root/db/connection";
import startServer from "#root/server/startServer";

getConnection().initialize().then(() => {
    startServer();
}).catch((error) => console.log(error));