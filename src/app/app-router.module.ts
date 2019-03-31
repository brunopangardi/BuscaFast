import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnuncioComponent } from './anuncio/anuncio.component';
import { LoginComponent } from './login/login.component';
import { EtapasCadastroComponent } from './etapas-cadastro/etapas-cadastro.component';
import { CadastroDadosClienteComponent } from './etapas-cadastro/cadastro-dados-cliente/cadastro-dados-cliente.component';

let rotas = [
  {path: "dashboard", component: DashboardComponent},
  {path: "anuncio", component: AnuncioComponent},
  {path: "login", component: LoginComponent},
  {path: "conta/nova", component: EtapasCadastroComponent},
  {path: "conta/dados", component: CadastroDadosClienteComponent},
  {path: "**", redirectTo: "/login"}
]

@NgModule({
  imports: [
    RouterModule.forRoot(rotas)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
