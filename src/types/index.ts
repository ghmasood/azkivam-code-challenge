export interface IProduct {
  id: string;
  name: string;
  slug: string;
  available: boolean;
  categoryId: number;
  categoryName: string;
  minPrice: number;
  maxPrice: number;
  imageUrl: string;
  azkivam: boolean;
  hidden: boolean;
  merchantName: string;
  merchantId: number;
}

export interface IProductRes {
  data: IProduct[];
  totalItems: number;
}

export interface IMerchant {
  id: number;
  name: string;
  enabled: boolean;
  description: string;
}

export interface IMerchantRes {
  data: IMerchant[];
}

export interface ICategories {
  id: number;
  name: string;
  slug: string;
  enabled: boolean;
  priority: number;
  mapped: boolean;
  parent: number;
}

export interface ICategoriesRes {
  data: ICategories[];
}

export interface IHomePageData {
  productData: IProductRes;
  merchantData: IMerchantRes;
  categoriesData: ICategoriesRes;
}
