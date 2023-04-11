import { risellClient } from "@graphql/index";

export async function addNewBid(data) {
  const { addNewBid } = await risellClient.addNewBid(data);
  return { addNewBid };
}
