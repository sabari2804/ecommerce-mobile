import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public cartAddedSubject = new Subject<boolean>();

  cartObj : any ;
  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(window.origin+'/assets/product.json');
  }

  addToCart(obj: any){
    this.cartObj = obj
    console.log(obj)
  }

  getCartItemsByCustId(custId: number) : Observable<any[]>  {
    
    return this.http.get<any[]>("http://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?id=" + custId);
  }
   removeCartItemById(cartId: number) : Observable<any[]>  {
    return this.http.get<any[]>("http://onlinetestapi.gerasim.in/api/Ecomm/DeleteProductFromCartById?id=" + cartId);
  }

  makeSale(obj: any) : Observable<any> {
    debugger;
    return this.http.post<any>("http://onlinetestapi.gerasim.in/api/Ecomm/AddNewSale",obj);
  }
}
