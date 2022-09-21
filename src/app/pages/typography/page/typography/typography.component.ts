import { Component, OnInit } from '@angular/core';
import { CodeSnippetTypographyHTMLConst } from '../../shared/const';

@Component({
	selector: 'app-typography',
	templateUrl: './typography.component.html',
	styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent implements OnInit {
	public isShowSnippet!: boolean;
	public codeSnippet!: string;
	public isDesktop!: boolean;

	constructor() {}

	ngOnInit(): void {
		this.isShowSnippet = false;
		this.codeSnippet = CodeSnippetTypographyHTMLConst;
		this.isDesktop = localStorage.getItem('isDesktop') === 'true';
	}
}
