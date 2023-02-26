import { Product } from "@utils/Types";

export type PandaMasonryItemSliderProps = {
  headerComponent: React.ComponentType;
  productData: Product[];
  itemOnPress: (item: Product) => void;
  title?: String;
};
