import { Component, OnInit } from '@angular/core';
import { CodeSnippetConst } from '../../shared/const';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
	public isShowSnippet!: boolean;
	public codeSnippet!: string;

	constructor() {}

	ngOnInit(): void {
		this.isShowSnippet = false;
		this.codeSnippet = CodeSnippetConst;
	}
}
