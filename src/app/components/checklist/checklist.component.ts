import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-checklist',
	templateUrl: './checklist.component.html',
	styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

	// placeholder
	todos: string[] = ['Limpiar', 'Comer', 'Estudiar', 'Trabajar', 'Dormir'];

	constructor() { }

	ngOnInit(): void {
	}

}
