import { Component, OnInit } from '@angular/core';
import { TipoContaEnum } from '../../enums/tipoConta';
import { CadastroDadosClienteService } from './cadastro-dados-cliente.service';
import { Endereco } from '../../models/Endereco';
import { ToastrService } from '../../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-cadastro-dados-cliente',
  templateUrl: './cadastro-dados-cliente.component.html',
  styleUrls: ['./cadastro-dados-cliente.component.css']
})
export class CadastroDadosClienteComponent implements OnInit {

  tipoConta: string = TipoContaEnum.PessoaFisica;

  constructor(private service: CadastroDadosClienteService, private toast: ToastrService) { }

  endereco: any;

  ngOnInit() {
  }

  obterEnderecoPorCep(cep: string) {
    if (cep != "") {
      this.service.obterEnderecoPorCep(cep)
        .subscribe(resposta => this.endereco = resposta,
          error => this.toast.error("Ocorreu um erro ao carregar o endereco"));
    }
  }

}
