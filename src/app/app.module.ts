import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectoRegistroComponent } from './components/proyecto-registro/proyecto-registro.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';
import { CalculoComponent } from './components/calculo/calculo.component';

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
    ProyectoComponent,
    ChatComponent,
    LoginComponent,
    ProyectosComponent,
    ChecklistComponent,
    ProyectoRegistroComponent,
    CalculoComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpClientModule,
    AppRoutingModule,
	AuthModule.forRoot({
		...env.auth
	}),
	BrowserAnimationsModule,
	MatTabsModule,
	MatListModule,
	SpreadsheetAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
