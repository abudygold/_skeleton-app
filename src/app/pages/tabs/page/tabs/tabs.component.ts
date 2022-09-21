import { Component, OnInit } from '@angular/core';
import {
	CodeSnippetTabsHTMLConst,
	CodeSnippetTabsModuleConst,
} from '../../shared/const';

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
	public isShowSnippet!: boolean;
	public codeSnippetHTML!: string;
	public codeSnippetModule!: string;

	constructor() {}

	ngOnInit(): void {
		this.isShowSnippet = false;
		this.codeSnippetHTML = CodeSnippetTabsHTMLConst;
		this.codeSnippetModule = CodeSnippetTabsModuleConst;
	}
}
