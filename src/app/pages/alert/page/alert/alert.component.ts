import { Component, OnInit } from '@angular/core';
import { CodeSnippetAlertHTMLConst } from '../../shared/const';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
	public isShowSnippet!: boolean;
	public codeSnippetHTML!: string;

	constructor() {}

	ngOnInit(): void {
		this.isShowSnippet = false;
		this.codeSnippetHTML = CodeSnippetAlertHTMLConst;
	}
}
