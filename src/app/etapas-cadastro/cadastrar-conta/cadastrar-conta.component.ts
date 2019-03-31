import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cadastrar-conta',
  templateUrl: './cadastrar-conta.component.html',
  styleUrls: ['./cadastrar-conta.component.css']
})
export class CadastrarContaComponent implements OnInit {
 
  constructor(private router: Router) { }

  ngOnInit() {
  }

  salvar(){
    alert('Salvo com sucesso!');
    this.router.navigate(['/conta/dados'])
  }

}
