export interface Products {
  name: string;
  description: string;
  price: number;
  taxCategory: string;
  productImages: string[];
  status: string;
  files: string[];
  sales: number;
  revenue: number;
}

export interface StoreSettings {
  header: boolean;
  logo: boolean;
  name: boolean;
  description: boolean;
  descriptionText: string;
  subscribe: boolean;
  subscriberForm: boolean;
  thumbnailSize: string;
  showProductDetails: boolean;
}
