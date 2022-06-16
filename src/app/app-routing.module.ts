import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
// import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent} from "./product-list/product-list.component";
import { HomeComponent} from "./home/home.component"



const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    

  },
  {
    path: "products",
    
    children: [
      { path: '', component: ProductListComponent },

      {path: "add", component: ProductAddComponent },
      {path: ":id/edit", component: ProductAddComponent }

    ]
      
    
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
