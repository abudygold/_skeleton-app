export const CodeSnippetSearchHTMLConst = `
<adl-search [config]="searchConfig"
	(updateSearch)="updateOutput($event)"></adl-search>
`;

export const CodeSnippetSearchTSConst = `
import { Component, OnInit } from '@angular/core';
import { SearchModel } from 'adl-ui-framework';

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

	public updateSearch(value: any): void {
		console.log('--- Update Search ---', value);
	}
}
`;

export const CodeSnippetSearchModuleConst = `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchModule } from 'adl-ui-framework';

@NgModule({
	imports: [
		CommonModule,
		SearchModule,
	],
})
export class ADLLibraryModule {}
`;
