import { Component, OnInit } from '@angular/core';
import {
	CodeSnippetAvatarHTMLConst,
	CodeSnippetAvatarHTMLWithTextConst,
	CodeSnippetAvatarModuleConst,
} from '../../shared/const';

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
	public codeSnippetModule!: string;

	constructor() {}

	ngOnInit(): void {
		this.isShowSnippet = false;
		this.isShowSnippetWithText = false;
		this.codeSnippet = CodeSnippetAvatarHTMLConst;
		this.codeSnippetWithText = CodeSnippetAvatarHTMLWithTextConst;
		this.codeSnippetModule = CodeSnippetAvatarModuleConst;
	}
}
