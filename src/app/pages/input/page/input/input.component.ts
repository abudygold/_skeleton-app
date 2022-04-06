import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CodeSnippetConst, CodeSnippetTSConst } from '../../shared/const';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
	public isShowSnippet!: boolean;
	public codeSnippet!: string;
	public codeSnippetTS!: string;
	public form!: FormControl;
	public formDisabled!: FormControl;
	public validationMessges!: never;

	constructor() {}

	ngOnInit(): void {
		this.isShowSnippet = false;
		this.codeSnippet = CodeSnippetConst;
		this.codeSnippetTS = CodeSnippetTSConst;

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
