import { Component, OnInit } from '@angular/core';
import {IProducts} from "../models/product";
import {ProductsService} from "../service/products.service"

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList !: IProducts[]

  constructor(private ProductsService: ProductsService ) {  }

  ngOnInit(): void {
    this.showProduct()
  }
  showProduct() {
    this.ProductsService.getProducts().subscribe((data:any) => this.productList = data)

  }
  onRemoveItems(id: number) {
    const confirm = window.confirm("Ban co chac chan muon xoa khong");
    if(confirm) {
      this.ProductsService.delProduct(id).subscribe(data => {
        this.productList = this.productList.filter(item => item.id !==id)

      })
      
    }

  }

}
