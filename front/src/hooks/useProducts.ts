import { risellClient } from "@graphql/index";
import { useQuery } from "react-query";

async function fetchHomeProducts() {
  const { products } = await risellClient.getProducts();
  return { products };
}

export function useFetchHomeProducts() {
  return useQuery(["products"], fetchHomeProducts);
}
