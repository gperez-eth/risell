import { GetProductsQuery } from "@graphql/__generated__/risell";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { zustandStorage } from "./storage";

type homeProductsState = {
  homeProductsList: GetProductsQuery[];
};

export const useHomeProductsStore = create(
  persist<homeProductsState>(
    (set, get) => ({
      homeProductsList: [],
    }),
    { name: "products-home", storage: createJSONStorage(() => zustandStorage) },
  ),
);
