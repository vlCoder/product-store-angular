import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Products } from '../../types/products.interface';
import { PayloadProducts } from '../../types/payload-products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpClient = inject( HttpClient )

  getAll() {
    return this.httpClient.get<Products[]>('/api/products') 
  }

  get(id:string){
    return this.httpClient.get<Products>(`api/products/${id}`)
  }
  
  post(payload:PayloadProducts){
    return this.httpClient.post('/api/products', payload) 
  }

  put(id:string, payload:PayloadProducts){
    return this.httpClient.put(`/api/products/${id}`, payload) 
  }

  delete(id:string){
    return this.httpClient.delete(`/api/products/${id}`) 
  }
}
