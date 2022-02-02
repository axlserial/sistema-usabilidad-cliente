import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.component.html',
	styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

	public perfilJson: string = "";

	constructor(public auth: AuthService) { }

	ngOnInit(): void {
		this.auth.user$.subscribe((perfil) => {
			this.perfilJson = JSON.stringify(perfil, null, 2);
		});
	}

}
