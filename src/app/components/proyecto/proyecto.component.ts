import { Component, OnInit } from '@angular/core';
// import { Spreadsheet } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
	selector: 'app-proyecto',
	templateUrl: './proyecto.component.html',
	styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

	public openUrl = 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open';
	public saveUrl = 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save';

}
