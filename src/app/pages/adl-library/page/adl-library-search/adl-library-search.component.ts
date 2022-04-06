import { Component, OnInit } from '@angular/core';
import { SearchModel } from 'axiata-ui-framework';

@Component({
	selector: 'app-adl-library-search',
	templateUrl: './adl-library-search.component.html',
	styleUrls: ['./adl-library-search.component.scss'],
})
export class ADLLibrarySearchComponent implements OnInit {
	public searchConfig!: SearchModel;

	constructor() {}

	ngOnInit(): void {
		this.searchConfig = new SearchModel('Search');
	}

	public updateOutput(value: any): void {
		console.log('--- Update Search ---', value);
	}
}
