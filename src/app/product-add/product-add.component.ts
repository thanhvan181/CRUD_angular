import { Component, OnInit } from '@angular/core';
import {IProducts} from "../models/product";
import {ProductsService} from "../service/products.service";
import { Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: IProducts = {
    name: '',
    img: '',
    price: 0,
    description: ''
  }

  constructor(private ProductsService: ProductsService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.ActivatedRoute.snapshot.paramMap.get('id') as any;
      if (id) {
        // nếu có id thì call service get product để lấy thông tin trả về form
        this.ProductsService.getProduct(id).subscribe(data => this.product = data);
      }
   
  }
  onSubmit() {
    const id = this.ActivatedRoute.snapshot.paramMap.get('id') as any;
    if(id) {
      this.ProductsService.updateProduct(this.product).subscribe(data => {
        this.router.navigateByUrl("/products")
      })
    }
    this.ProductsService.createProduct(this.product).subscribe(data => {
      this.router.navigateByUrl("/products")
    })

  }


}
