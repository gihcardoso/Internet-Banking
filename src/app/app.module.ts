// Modulos próprios
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';

// Modulos criados pro Teste
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Novos componentes > (Certificar que eles estão no declarations)
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { TransferenciasComponent } from './transferencias/transferencias.component';
// Services > (Depois daqui, adicionar no providers abaixo)
import{LoginService} from './services/login.service';
import{AuthService} from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ExtratoComponent,
    TransferenciasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    LoginService,
    AuthService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
