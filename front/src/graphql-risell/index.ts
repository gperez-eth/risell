import { config } from "./config";
import { getFetchRequester } from "./utils/getFetchRequester";
import { getSdk as getRisellSdk } from "./__generated__/risell";

export const risellClient = getRisellSdk(
  getFetchRequester(config.risell.schema),
);
