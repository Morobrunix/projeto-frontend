import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Endereco } from '../Module/Endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecosService {

  private _endereco = new Subject<Endereco>();
private baseUrl = `${environment.baseUrl}/addresses`

  constructor(private http:HttpClient) {}

  all(query ?: string): Observable<Endereco[]>{
    const params = query ? { params: { q: query } } : {};
    return this.http.get<Endereco[]>(this.baseUrl, params);

  }
  getOne(id: number){
    return this.http.get<Endereco>(`${this.baseUrl}/${id}`);
  }

  delete(id:number): Observable<unknown>{
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  upsert(produto: Endereco){
    const zipCodForm = produto.zipCode.replace('-', '')
    produto.zipCode = Number(zipCodForm)
    if (produto.id) {
      return this.http.patch<Endereco>(`${this.baseUrl}/${produto.id}`, produto);
    } else {
      return this.http.post<Endereco>(this.baseUrl, produto);
    }

  }

  getproduto(): Observable<Endereco> {
    return this._endereco.asObservable();
  }

  setProduto(endereco: Endereco) {
    this._endereco.next(endereco);
  }
}



