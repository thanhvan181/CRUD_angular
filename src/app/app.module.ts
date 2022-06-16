import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
// import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { ProductAddComponent } from './product-add/product-add.component';
// import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
// import { FormsModule, import {FormsModule, ReactiveFormsModule} from '@angular/forms' } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    
    // AdminLayoutComponent,
    // WebsiteLayoutComponent,
    ProductAddComponent,
    // ProductEditComponent,
    ProductListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
