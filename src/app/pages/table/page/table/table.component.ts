import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// import { BaseService } from '../../../../../../node_modules/adl-ui-framework/projects/atomic-design/src/public-api';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
	private subscribers: Subscription[] = [];
	// private baseService: BaseService
	constructor() {}

	ngOnInit(): void {
		this.get();
	}

	private get() {
		// const subs = this.baseService
		// 	.getData('https://jsonplaceholder.typicode.com/todos', null)
		// 	.subscribe(resp => {
		// 		console.log(resp);
		// 	});
		// this.subscribers.push(subs);
	}
}
