import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../../dialog/alert-dialog';
import {
	CodeSnippetDialogHTMLConst,
	CodeSnippetDialogModuleConst,
	CodeSnippetDialogTSConst,
	CodeSnippetOpenDialogHTMLConst,
	CodeSnippetOpenDialogTSConst,
} from '../../shared/const';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
	public isShowSnippet!: boolean;
	public codeSnippetHTMLOpenDialog!: string;
	public codeSnippetTSOpenDialog!: string;
	public codeSnippetHTML!: string;
	public codeSnippetTS!: string;
	public codeSnippetModule!: string;

	constructor(private dialog: MatDialog) {}

	ngOnInit(): void {
		this.isShowSnippet = false;
		this.codeSnippetHTMLOpenDialog = CodeSnippetOpenDialogHTMLConst;
		this.codeSnippetTSOpenDialog = CodeSnippetOpenDialogTSConst;
		this.codeSnippetHTML = CodeSnippetDialogHTMLConst;
		this.codeSnippetTS = CodeSnippetDialogTSConst;
		this.codeSnippetModule = CodeSnippetDialogModuleConst;
	}

	public openDialog(): void {
		this.dialog.open(AlertDialogComponent, {
			width: '500px',
			autoFocus: false,
			data: {
				name: 'Testing',
			},
		});
	}
}
