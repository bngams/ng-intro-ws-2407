import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductCardComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductDashboardComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
