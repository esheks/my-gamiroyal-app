import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { SofaComponent } from './sofa/sofa.component';
import { BedsComponent } from './beds/beds.component';
import { DiningComponent } from './dining/dining.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'products', component: ProductsComponent},
  {path:'contact', component: ContactComponent},
  {path:'sofa', component: SofaComponent},
  {path:'beds', component: BedsComponent},
  {path:'dining', component: DiningComponent},
  {path:'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
