import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { AddProductDto, UpdateProductDto } from './products.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  fetchProducts() {
    return this.productService.fetchProducts();
  }

  @Get(':id')
  fetProduct(@Param('id') id: string) {
    return this.productService.fetchProduct(id);
  }

  @Post()
  addProduct(@Body() addProductDTO: AddProductDto) {
    return this.productService.addProduct(addProductDTO);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateProduct: UpdateProductDto,
  ) {
    return this.productService.updateProduct(id, updateProduct);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
