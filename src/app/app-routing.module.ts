import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';
import { CollectionComponent } from './collection/collection.component';


const routes: Routes = [
  { path:'',component: HomeContentComponent },
  { path:'collections',component: CollectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeContentComponent, CollectionComponent ]
