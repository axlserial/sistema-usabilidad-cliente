import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectoRegistroComponent } from './components/proyecto-registro/proyecto-registro.component';
import { PreloaderComponent } from './components/preloader/preloader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    PerfilComponent,
    NotFoundComponent,
    ProyectosComponent,
    ProyectoComponent,
    ChatComponent,
    LoginComponent,
    ProyectoRegistroComponent,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	AuthModule.forRoot({
		...env.auth
	})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
