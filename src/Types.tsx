export type Products = {
  name: string;
  description: string;
  price: number;
  taxCategory: string;
  productImages: string[];
  status: string;
  files: string[];
  sales: number;
  revenue: number;
};

export type StoreSettings = {
  header: boolean;
  logo: boolean;
  name: boolean;
  description: boolean;
  descriptionText: string;
  subscriberForm: boolean;
  thumbnailSize: string;
  showProductDetails: boolean;
};
