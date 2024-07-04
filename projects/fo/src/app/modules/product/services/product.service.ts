
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { PRODUCTS_MOCK } from '../mocks/products.mock';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ProductApiResponse } from '../models/products-api-response';

@Injectable({
  providedIn: 'root' // root context => available everywhere
})
export class ProductService {

  products = PRODUCTS_MOCK;

  product$: Subject<Product> = new Subject();

  // BehaviorSubject (can be setup with an initial value)
  products$: BehaviorSubject<Product[]> = new BehaviorSubject(PRODUCTS_MOCK);

  constructor(private http: HttpClient) {
    // init possible (classic object lifecycle)
    this.testSubscribeOnProducts$();
    this.loadProducts();
  }

  testSubscribeOnProducts$(): void {
    this.products$.subscribe((data) => {
      console.log('DATA FROM products$ subscribe', data);
    })
  }

  loadProducts(): void {
    // es5 syntax
    // this.http.get(environment.apiBaseUrl + '/products');
    this.http.get(`${environment.apiBaseUrl}/products`).subscribe((data: any) => {
      this.products = data.products;
    })
  }

  // /!\ attention any
  getProducts(): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}/products`);
  }

  getProductsWithType(): Observable<ProductApiResponse> {
    return this.http.get<ProductApiResponse>(`${environment.apiBaseUrl}/products`);
  }

  getProductsAsObservableProducts(): Observable<Product[]> {
    return this.http.get<ProductApiResponse>(`${environment.apiBaseUrl}/products`)
    .pipe(
      map((data: ProductApiResponse): Product[] => data.products)
    );
  }
}
