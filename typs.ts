export type InferGetStaticPaths<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? { params?: R }
  : never;

export interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductsDetails {
  image?: string;
  price?: number;
  id: string | number;
  title?: string;
  description?: string;
  thumbailUrl?: string;
  thumbailAlt?: string;
  rating?: number;
}
