import { Product, Seller } from "@utils/Types";

export type DefaultProductScreenProps = {
  sellerData: Seller;
  itemData: {
    title: string;
    images: string[];
    isShippable: boolean;
    isAuction: string;
    currentPrice: string;
    description: string;
    category: string;
    lastEdited: string;
    views: number;
    likes: number;
    postCode: number;
    city: string;
    location: string;
  };
  navigation: any;
};
