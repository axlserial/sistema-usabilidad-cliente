import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { ProyectoRegistroComponent } from './components/proyecto-registro/proyecto-registro.component';
import { CalculoComponent } from './components/calculo/calculo.component';

const routes: Routes = [

	{
		path: "",
		redirectTo: "/login",
		pathMatch: "full"
	},
	{
		path: "login",
		component: LoginComponent
	},
	{
		path: "home",
		component: HomeComponent,
		canActivate: [AuthGuard]
	},
	{
		path: "perfil",
		component: PerfilComponent,
		canActivate: [AuthGuard]
	},
	{
		path: "proyectos",
		component: ProyectoComponent
	},
	{
		path:"registroProyecto",
		component:ProyectoRegistroComponent
	},
	{
		path: "spreadsheet",
		component: CalculoComponent
	},
	{
		path: "**",
		component: NotFoundComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
