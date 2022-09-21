import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
	CodeSnippetInputFormValidationConst,
	CodeSnippetInputHTMLConst,
	CodeSnippetInputModuleConst,
	CodeSnippetInputTSConst,
} from '../../shared/const';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
	public isShowSnippet!: boolean;
	public codeSnippet!: string;
	public codeSnippetTS!: string;
	public codeSnippetModule!: string;
	public codeSnippetValidation!: string;
	public form!: FormControl;
	public formDisabled!: FormControl;
	public validationMessges!: any;
	public isDesktop!: boolean;

	constructor() {}

	ngOnInit(): void {
		this.isShowSnippet = false;
		this.codeSnippet = CodeSnippetInputHTMLConst;
		this.codeSnippetTS = CodeSnippetInputTSConst;
		this.codeSnippetModule = CodeSnippetInputModuleConst;
		this.codeSnippetValidation = CodeSnippetInputFormValidationConst;
		this.isDesktop = localStorage.getItem('isDesktop') === 'true';

		this.form = new FormControl(null, Validators.required);
		this.form.markAllAsTouched();
		this.formDisabled = new FormControl(
			{
				value: null,
				disabled: true,
			},
			Validators.required
		);
	}
}
