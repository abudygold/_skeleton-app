import { Component, OnInit } from '@angular/core';
import {
	CodeSnippetTooltipHTMLConst,
	CodeSnippetTooltipModuleConst,
} from '../../shared/const';

@Component({
	selector: 'app-tooltip',
	templateUrl: './tooltip.component.html',
	styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
	public isShowSnippet!: boolean;
	public codeSnippetHTML!: string;
	public codeSnippetModule!: string;

	constructor() {}

	ngOnInit(): void {
		this.isShowSnippet = false;
		this.codeSnippetHTML = CodeSnippetTooltipHTMLConst;
		this.codeSnippetModule = CodeSnippetTooltipModuleConst;
	}
}
