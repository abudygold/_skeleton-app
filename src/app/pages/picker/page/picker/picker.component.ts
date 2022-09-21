import { Component, OnInit } from '@angular/core';
import {
	CodeSnippetAppConfigConst,
	CodeSnippetAppModuleConst,
	CodeSnippetPickerHTMLConst,
	CodeSnippetPickerModuleConst,
	CodeSnippetPickerTSConst,
} from '../../shared/const';

@Component({
	selector: 'app-picker',
	templateUrl: './picker.component.html',
	styleUrls: ['./picker.component.scss'],
})
export class PickerComponent implements OnInit {
	public selectedTime: any;
	public isShowSnippet!: boolean;
	public codeSnippetAppConfig!: string;
	public codeSnippetAppModule!: string;
	public codeSnippetHTML!: string;
	public codeSnippetTS!: string;
	public codeSnippetModule!: string;

	constructor() {}

	ngOnInit(): void {
		this.isShowSnippet = false;
		this.codeSnippetAppConfig = CodeSnippetAppConfigConst;
		this.codeSnippetAppModule = CodeSnippetAppModuleConst;
		this.codeSnippetHTML = CodeSnippetPickerHTMLConst;
		this.codeSnippetTS = CodeSnippetPickerTSConst;
		this.codeSnippetModule = CodeSnippetPickerModuleConst;
	}
}
