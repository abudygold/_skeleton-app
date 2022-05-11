import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
	CodeSnippetDirectiveHTMLConst,
	CodeSnippetDirectiveTSConst,
	CodeSnippetPipeHTMLConst,
	CodeSnippetPipeModuleConst,
	CodeSnippetPipeTSConst,
} from '../../shared/const/adl-library-pipe-snippet.const';

@Component({
	selector: 'app-adl-library-pipe',
	templateUrl: './adl-library-pipe.component.html',
	styleUrls: ['./adl-library-pipe.component.scss'],
})
export class ADLLibraryPipeComponent implements OnInit {
	public form!: FormGroup;
	public htmlContent!: string;
	public pictureUrl!: string;
	public catVideoEmbed!: string;
	public isShowSnippetPipe!: boolean;
	public isShowSnippetDirective!: boolean;
	public codeSnippetPipe!: string;
	public codeSnippetDirective!: string;
	public codeSnippetPipeTS!: string;
	public codeSnippetDirectiveTS!: string;
	public codeSnippetModule!: string;

	constructor() {}

	ngOnInit(): void {
		this.isShowSnippetPipe = false;
		this.isShowSnippetDirective = false;
		this.htmlContent = `<h1>Lorem ipsum dolor sit amet.</h1>`;
		this.pictureUrl = `https://angular.io/assets/images/logos/angular/angular.svg`;
		this.catVideoEmbed = `https://www.youtube.com/embed/QH2-TGUlwu4"`;
		this.codeSnippetPipe = CodeSnippetPipeHTMLConst;
		this.codeSnippetDirective = CodeSnippetDirectiveHTMLConst;
		this.codeSnippetPipeTS = CodeSnippetPipeTSConst;
		this.codeSnippetDirectiveTS = CodeSnippetDirectiveTSConst;
		this.codeSnippetModule = CodeSnippetPipeModuleConst;

		this.initForm();
	}

	private initForm(): void {
		this.form = new FormGroup({
			inputCurrency: new FormControl(null),
			onlyNumber: new FormControl(null),
			inputDecimal: new FormControl(null),
			inputNumber: new FormControl(null),
			inputRupiah: new FormControl(null),
		});
	}
}
