import { Component, OnInit, OnDestroy } from '@angular/core';
import { AnuncioService } from './anuncio.service';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit, OnDestroy {

  resumo;
  inscricao;
  error;

  constructor(private service: AnuncioService) { }

  ngOnInit() {
     this.inscricao = this.service.obterAnuncio()
      .subscribe(dados => this.resumo = dados, error => this.error = true);    
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
