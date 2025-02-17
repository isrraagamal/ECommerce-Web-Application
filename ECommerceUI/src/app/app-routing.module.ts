import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { SuggestedProductsComponent } from './suggested-products/suggested-products.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ContactComponent } from './contact/contact.component';
import { RandomProductsComponent } from './random-products/random-products.component';
import { LoginnComponent } from './loginn/loginn.component';
import { RegisterrComponent } from './registerr/registerr.component';
import { AddProdComponent } from './add-prod/add-prod.component';
import { AdminComponent } from './admin/admin.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'login', component: LoginnComponent },
  { path: 'registerr', component: RegisterrComponent },
  { path: 'randomProduct', component: RandomProductsComponent },
  { path: 'admin', component: AdminComponent },

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'user-management', component: UserManagementComponent },
      { path: 'admin-order', component: AdminOrderComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'add-prod', component: AddProdComponent },
      { path: 'admin-contact', component: AdminContactComponent },
      // { path: 'admin-contact', component: ContactComponent },
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  { path: 'suggest', component: SuggestedProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
