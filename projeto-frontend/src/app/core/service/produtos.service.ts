import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produtos } from '../Module/Produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
private baseUrl = `${environment.baseUrl}/products`

  constructor(private http:HttpClient) { }


  all(query?: string): Observable<Produtos[]>{
    const params = query ? { params: { q: query } } : {};
    return this.http.get<Produtos[]>(this.baseUrl, params);
  }

  delete(id:number): Observable<unknown>{
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
  upsert(produto: Produtos){
    if (produto) {
      return this.http.patch<Produtos>(`${this.baseUrl}/${produto.id}`, produto);
    } else {
      return this.http.post<Produtos>(this.baseUrl, produto);
    }

  }
}



