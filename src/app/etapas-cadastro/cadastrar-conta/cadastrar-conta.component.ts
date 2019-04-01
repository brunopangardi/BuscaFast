import { Component, OnInit, ɵpureFunctionV } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'node_modules/ngx-toastr';
import { FormGroup } from 'node_modules/@angular/forms';

@Component({
  selector: 'app-cadastrar-conta',
  templateUrl: './cadastrar-conta.component.html',
  styleUrls: ['./cadastrar-conta.component.css']
})
export class CadastrarContaComponent implements OnInit {

  formEmail: FormGroup;

  constructor(private router: Router, private toast: ToastrService) { }

  ngOnInit() {

  }

  salvarConta() {
    this.toast.success("Verifique seu e-mail para concluir o cadastro");

    setTimeout(() => {
      this.router.navigateByUrl("/")
    }, 3000);
  }

}
