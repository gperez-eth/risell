import { risellClient } from "@graphql/index";
import { QueryFunctionContext, useQuery } from "react-query";

async function fetchProduct(ctx: QueryFunctionContext) {
  const [_, productId] = ctx.queryKey;
  const { product } = await risellClient.getProductData({ productId });
  return { product };
}

export function useFetchProduct(productId: String) {
  return useQuery(["product", productId], fetchProduct, {
    refetchInterval: 10000,
  });
}
