import { TokenInterceptor } from './interceptors/token.interceptor';
// Modulos próprios
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';

// Modulos criados --
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Novos componentes > (Certificar que eles estão no declarations)
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { TransferenciasComponent } from './components/transferencias/transferencias.component';
import { ErrorComponent } from './components/error/error.component';

// Services > (Depois daqui, verificar se esta no providers)
import { AuthService } from './services/auth.service';

// Guards > (Depois daqui, verificar se esta no providers)
import { AuthGuard } from './guards/auth.guard';
import { ExtratoTransfComponent } from './components/extrato-transf/extrato-transf.component';

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
    ErrorComponent,
    ExtratoTransfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
