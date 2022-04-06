import { Component, OnInit } from '@angular/core';
import {
	CodeSnippetAsCardConst,
	CodeSnippetBasicConst,
	CodeSnippetWithIconConst,
} from '../../shared/const';

@Component({
	selector: 'app-accordion',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
	public isShowAccordionBasic!: boolean;
	public isShowAccordionWithIcon!: boolean;
	public isShowAccordionAsCard!: boolean;
	public codeSnippetBasic!: string;
	public codeSnippetWithIcon!: string;
	public codeSnippetAsCard!: string;

	constructor() {}

	ngOnInit(): void {
		this.isShowAccordionBasic = false;
		this.isShowAccordionWithIcon = false;
		this.isShowAccordionAsCard = false;
		this.codeSnippetBasic = CodeSnippetBasicConst;
		this.codeSnippetWithIcon = CodeSnippetWithIconConst;
		this.codeSnippetAsCard = CodeSnippetAsCardConst;
	}
}
