export type ProductDataProps = {
  title: string;
  description: string;
  price: number;
  isShippable: boolean;
  editedAt: string;
  isAuction: boolean;
  views: number;
  likes: number;
  user: { id: string; location: string; username: string; avatar: string };
  auction?: {
    id: string;
    expirationTime: string;
    bids: Array<{
      amount: number;
      bidTime: string;
      user: { id: string; username: string; avatar: string };
    }>;
  } | null;
  currency: { currency_code: string; currency_symbol: string };
  images: Array<{ uri: string }>;
};
