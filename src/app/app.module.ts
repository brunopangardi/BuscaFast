import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { RodapeComponent } from './rodape/rodape.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRouterModule } from './app-router.module';
import { AnuncioComponent } from './anuncio/anuncio.component';
import { AnuncioService } from './anuncio/anuncio.service';
import { HttpClientModule } from '@angular/common/http';
import { EtapasCadastroComponent } from './etapas-cadastro/etapas-cadastro.component';
import { LoginComponent } from './login/login.component';
import { AreaLogadaComponent } from './area-logada/area-logada.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent,
    MenuLateralComponent,
    RodapeComponent,
    DashboardComponent,
    AnuncioComponent,
    EtapasCadastroComponent,
    LoginComponent,
    AreaLogadaComponent 
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule
  ],  
  providers: [AnuncioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
