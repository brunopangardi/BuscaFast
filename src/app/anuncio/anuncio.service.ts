import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  constructor(private http: HttpClient) { }

  obterAnuncio(){
   return this.http.get(environment.UrlAPI + "resumo");
  }

  inserirAnuncio(){
  }

  alterarAnuncio(){
  }
  
}
