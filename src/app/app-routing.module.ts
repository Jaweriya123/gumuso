import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';
import { CollectionComponent } from './collection/collection.component';
import { ProductpageComponent } from './productpage/productpage.component';

const routes: Routes = [
  { path:'',component: HomeContentComponent },
  { path:'collections',component: CollectionComponent },
  { path:'collections/product-name',component: ProductpageComponent },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeContentComponent, CollectionComponent ,ProductpageComponent]
