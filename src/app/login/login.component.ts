import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ToastrService} from 'node_modules/ngx-toastr';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: any;

  constructor(private toast: ToastrService, private route: Router) { }

  ngOnInit() {
    this.formulario = {};
  }

  realizarLogin(formLogin: FormGroup) {
    console.log(formLogin.value);     
    this.route.navigateByUrl("/conta/dados");  
  }

}
