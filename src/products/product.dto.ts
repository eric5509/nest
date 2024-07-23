export class AddProductDto {
    productName: string;
    amount: number;
    description: string;
    quantity: number;
  }
  

  export class UpdateProductDto {
    productName?: string;
    amount?: number;
    description?: string;
    quantity?: number;
  }
  
  