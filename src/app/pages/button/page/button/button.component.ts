import { Component, OnInit } from '@angular/core';
import { CodeSnippetConst, CodeSnippetTSConst } from '../../shared/const';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
	public isShowSnippet!: boolean;
	public codeSnippetTS!: string;
	public codeSnippet!: string;
	public isLoading!: boolean;

	constructor() {}

	ngOnInit(): void {
		this.isShowSnippet = false;
		this.codeSnippet = CodeSnippetConst;
		this.codeSnippetTS = CodeSnippetTSConst;
		this.isLoading = false;
	}

	public clickedButton(): void {
		this.isLoading = true;

		setTimeout(() => {
			this.isLoading = false;
		}, 2000);
	}
}
