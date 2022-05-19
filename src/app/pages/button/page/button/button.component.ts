import { Component, OnInit } from '@angular/core';
import {
	CodeSnippetButtonHTMLConst,
	CodeSnippetButtonModuleConst,
	CodeSnippetButtonTSConst,
} from '../../shared/const';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
	public isShowSnippet!: boolean;
	public codeSnippetHTML!: string;
	public codeSnippetTS!: string;
	public codeSnippetModule!: string;
	public isLoading!: boolean;

	constructor() {}

	ngOnInit(): void {
		this.isShowSnippet = false;
		this.codeSnippetHTML = CodeSnippetButtonHTMLConst;
		this.codeSnippetTS = CodeSnippetButtonTSConst;
		this.codeSnippetModule = CodeSnippetButtonModuleConst;
		this.isLoading = false;
	}

	public clickedButton(): void {
		this.isLoading = true;

		setTimeout(() => {
			this.isLoading = false;
		}, 2000);
	}
}
