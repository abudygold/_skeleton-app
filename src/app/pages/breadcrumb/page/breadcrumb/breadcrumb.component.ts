import { Component, OnInit } from '@angular/core';
import { CodeSnippetBreadcrumbConst } from '../../shared/const';

@Component({
	selector: 'app-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
	public isShowSnippet!: boolean;
	public codeSnippet!: string;

	constructor() {}

	ngOnInit(): void {
		this.isShowSnippet = false;
		this.codeSnippet = CodeSnippetBreadcrumbConst;
	}
}
