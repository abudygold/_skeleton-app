import { Component, OnInit } from '@angular/core';
import { SearchModel } from 'adl-ui-framework';
import {
	CodeSnippetSearchHTMLConst,
	CodeSnippetSearchModuleConst,
	CodeSnippetSearchTSConst,
} from '../../shared/const';

@Component({
	selector: 'app-adl-library-search',
	templateUrl: './adl-library-search.component.html',
	styleUrls: ['./adl-library-search.component.scss'],
})
export class ADLLibrarySearchComponent implements OnInit {
	public isShowSnippet!: boolean;
	public codeSnippet!: string;
	public codeSnippetTS!: string;
	public codeSnippetModule!: string;
	public searchConfig!: SearchModel;

	constructor() {}

	ngOnInit(): void {
		this.isShowSnippet = false;
		this.codeSnippet = CodeSnippetSearchHTMLConst;
		this.codeSnippetTS = CodeSnippetSearchTSConst;
		this.codeSnippetModule = CodeSnippetSearchModuleConst;

		this.searchConfig = new SearchModel('Search');
	}

	public updateSearch(value: any): void {
		console.log('--- Update Search ---', value);
	}
}
