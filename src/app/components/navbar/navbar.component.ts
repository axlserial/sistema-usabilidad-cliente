import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit(): void {
		$(document).ready(function () {
			$('.sidenav').sidenav();
			$(".dropdown-trigger").dropdown({ coverTrigger: false });
		});
	}

	redirectToProfile(): void {
		this.router.navigateByUrl('/perfil');
	}
}
