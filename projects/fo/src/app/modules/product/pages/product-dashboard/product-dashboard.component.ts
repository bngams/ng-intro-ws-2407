import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS_MOCK } from '../../mocks/products.mock';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.scss'
})
export class ProductDashboardComponent implements AfterViewInit {

  products: Product[] = PRODUCTS_MOCK;

  @ViewChild(ProductListComponent)
  private productListComponent!: ProductListComponent;

  constructor() {
    console.log('@ViewChild productListComponent is ', this.productListComponent);
  }

  ngAfterViewInit(): void {
    console.log('@ViewChild in ngAfterViewInit productListComponent is ', this.productListComponent);
  }

  addProductToList(product: Product): void {
    this.products.push(product);
    this.productListComponent.products.push(product);
  }
}
