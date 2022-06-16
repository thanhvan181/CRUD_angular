import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import {IProducts} from "../models/product"

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URL: string = "http://localhost:3000/products"
  constructor(private http: HttpClient) { }
  getProducts() : Observable<IProducts[]>{
    return this.http.get<IProducts[]>(`${this.API_URL}`)


}
getProduct(id: any) : Observable<IProducts> {
  return this.http.get<IProducts>(`${this.API_URL}/${id}`)

}
createProduct(product: IProducts) : Observable<IProducts> {
  return this.http.post<IProducts>(`${this.API_URL}`, product)

}
delProduct(id: number) : Observable<IProducts> {
  return this.http.delete<IProducts>(`${this.API_URL}/${id}`)

} 
updateProduct( product: IProducts) : Observable<IProducts> {
  return this.http.put<IProducts>(`${this.API_URL}/${product.id}`, product)

} 

}
