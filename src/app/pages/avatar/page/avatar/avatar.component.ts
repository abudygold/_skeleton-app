import { Component, OnInit } from '@angular/core';
import { CodeSnippetConst, CodeSnippetWithTextConst } from '../../shared/const';

@Component({
	selector: 'app-avatar',
	templateUrl: './avatar.component.html',
	styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
	public isShowSnippet!: boolean;
	public isShowSnippetWithText!: boolean;
	public codeSnippet!: string;
	public codeSnippetWithText!: string;

	constructor() {}

	ngOnInit(): void {
		this.isShowSnippet = false;
		this.isShowSnippetWithText = false;
		this.codeSnippet = CodeSnippetConst;
		this.codeSnippetWithText = CodeSnippetWithTextConst;
	}
}
