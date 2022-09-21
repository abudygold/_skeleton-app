export const CodeSnippetOpenDialogHTMLConst = `
<p (click)="openDialog()">Click Me!</p>
`;

export const CodeSnippetOpenDialogTSConst = `
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../../dialog/alert-dialog';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
	constructor(private dialog: MatDialog) {}

	ngOnInit(): void {}

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
`;

export const CodeSnippetDialogHTMLConst = `
<h2 mat-dialog-title>This is an information</h2>
<mat-dialog-content class="mat-typography">
	<p>You have made changes to this file. Do you wish to continue?</p>
</mat-dialog-content>
<mat-dialog-actions align="end">
	<button mat-button
		mat-dialog-close>Cancel</button>
	<button mat-flat-button
		color="primary"
		[mat-dialog-close]="true"
		cdkFocusInitial>Confirm</button>
</mat-dialog-actions>
`;

export const CodeSnippetDialogTSConst = `
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-alert-dialog',
	templateUrl: './alert-dialog.component.html',
	styleUrls: ['./alert-dialog.component.scss'],
})
export class AlertDialogComponent implements OnInit {
	constructor(@Inject(MAT_DIALOG_DATA) private data: { name: string }) {}

	ngOnInit(): void {}
}
`;

export const CodeSnippetDialogModuleConst = `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { AlertDialogComponent } from './dialog/alert-dialog';
import { DialogComponent } from './page/dialog';

@NgModule({
	declarations: [DialogComponent, AlertDialogComponent],
	imports: [
		CommonModule,
		MatDialogModule,
		MatButtonModule,
		MatTabsModule,
		MatIconModule,
	],
	entryComponents: [AlertDialogComponent],
})
export class DialogModule {}
`;
