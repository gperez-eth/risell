export type ProductCardProps = {
  id: string;
  title: string;
  price: number;
  isShippable: boolean;
  isAuction: boolean;
  auction: Array<{ expirationTime: string }>;
  currency: { currency_code: string; currency_symbol: string };
  images: Array<{ uri: string }>;
};
