import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroDadosClienteService {

  constructor(private http: HttpClient) { }

  obterEnderecoPorCep(cep: any){    
    return this.http.get(environment.UrlCep + cep + "/json");
  }

}
