import { risellClient } from "@graphql/index";
import { useQuery } from "@tanstack/react-query";

async function fetchCategories() {
  const { categories } = await risellClient.getCategories();
  return categories;
}

export function useFetchCategories() {
  return useQuery(["categories"], fetchCategories);
}
