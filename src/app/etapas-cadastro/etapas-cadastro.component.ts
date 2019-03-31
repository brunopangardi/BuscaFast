import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-etapas-cadastro',
  templateUrl: './etapas-cadastro.component.html',
  styleUrls: ['./etapas-cadastro.component.css']
})
export class EtapasCadastroComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // // this.formulario = new FormGroup({
    // //   email: new FormControl(null),
    // //   senha: new FormControl(null)}

    // this.formulario = this.formBuilder.group({
    //     email: [null],
    //     senha: [null]
    // });

  }

}
