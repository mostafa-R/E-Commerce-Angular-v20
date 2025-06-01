export interface IProducts {
  productId: number;
  productName: string;
  productQuantity: number;
  productPrice: number;
  productImgUrl: string;
  categoryId: number;
  productDetails: string;
  isPurchased?: boolean;
}
