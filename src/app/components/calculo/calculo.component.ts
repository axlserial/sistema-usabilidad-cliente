import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-calculo',
	templateUrl: './calculo.component.html',
	styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {

	public openUrl = 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open';
	public saveUrl = 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save';

	constructor() { }

	ngOnInit(): void {
	}

}
