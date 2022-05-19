export const CodeSnippetButtonHTMLConst = `
<section class="d-flex align-items-center mb-3">
	<button mat-flat-button
		color="primary">
		Search
	</button>

	<span class="mx-2"></span>

	<button mat-flat-button
		color="primary">
		<mat-icon svgIcon="icon-search-white"
			class="add-icons mr-2"></mat-icon>

		Search
	</button>

	<span class="mx-2"></span>

	<button mat-flat-button
		color="primary"
		class="rounded-20px">
		Search
	</button>

	<span class="mx-2"></span>

	<button mat-flat-button
		color="primary"
		class="rounded-20px">
		Search

		<mat-icon>close</mat-icon>
	</button>

	<span class="mx-2"></span>

	<button mat-flat-button
		color="primary"
		disabled>
		Search
	</button>
</section>

<section class="d-flex align-items-center">
	<button mat-flat-button
		color="primary"
		class="button-icon px-2">
		<mat-icon svgIcon="icon-search-white"
			class="add-icons m-1"></mat-icon>
	</button>

	<span class="mx-2"></span>

	<a mat-flat-button
		color="primary"
		href="https://www.google.com/"
		target="_blank">Link</a>

	<span class="mx-2"></span>

	<button mat-flat-button
		color="primary"
		class="loader"
		[disabled]="isLoading"
		(click)="clickedButton()">
		<mat-spinner *ngIf="isLoading"
			class="my-auto mr-2"
			[diameter]="20"
			[strokeWidth]="3"></mat-spinner>

		Click Me!
	</button>

	<span class="mx-2"></span>

	<button mat-flat-button
		color="primary"
		class="loader"
		[disabled]="isLoading"
		(click)="clickedButton()">
		<mat-spinner *ngIf="isLoading"
			class="my-auto mr-2"
			[diameter]="20"
			[strokeWidth]="3"></mat-spinner>

		<mat-icon svgIcon="icon-search-white"
			class="add-icons-with-block mr-2"></mat-icon>

		Click Me!
	</button>
</section>

<mat-divider class="my-4"></mat-divider>

<section class="d-flex align-items-center mb-3">
	<button mat-stroked-button
		color="primary">
		Search
	</button>

	<span class="mx-2"></span>

	<button mat-stroked-button
		color="primary">
		<mat-icon svgIcon="icon-search-blue"
			class="add-icons mr-2"></mat-icon>

		Search
	</button>

	<span class="mx-2"></span>

	<button mat-stroked-button
		color="primary"
		class="border-0">
		<mat-icon svgIcon="icon-search-blue"
			class="add-icons pr-1"></mat-icon>

		Search
	</button>

	<span class="mx-2"></span>

	<button mat-stroked-button
		color="primary"
		class="rounded-20px">
		Search
	</button>

	<span class="mx-2"></span>

	<button mat-stroked-button
		color="primary"
		class="rounded-20px">
		Search
		<mat-icon>close</mat-icon>
	</button>

	<span class="mx-2"></span>

	<button mat-stroked-button
		color="primary"
		disabled>
		Search
	</button>
</section>

<section class="d-flex align-items-center">
	<button mat-stroked-button
		color="primary"
		class="button-icon px-2">
		<mat-icon svgIcon="icon-search-blue"
			class="add-icons m-1"></mat-icon>
	</button>

	<span class="mx-2"></span>

	<a mat-stroked-button
		color="primary"
		href="https://www.google.com/"
		target="_blank">Link</a>

	<span class="mx-2"></span>

	<button mat-stroked-button
		color="primary"
		class="loader"
		[disabled]="isLoading"
		(click)="clickedButton()">
		<mat-spinner *ngIf="isLoading"
			class="my-auto mr-2"
			[diameter]="20"
			[strokeWidth]="3"></mat-spinner>
		Click Me!
	</button>

	<span class="mx-2"></span>

	<button mat-stroked-button
		color="primary"
		class="loader"
		[disabled]="isLoading"
		(click)="clickedButton()">
		<mat-spinner *ngIf="isLoading"
			class="my-auto mr-2"
			[diameter]="20"
			[strokeWidth]="3"></mat-spinner>

		<mat-icon svgIcon="icon-search-blue"
			class="add-icons-with-block mr-2"></mat-icon>

		Click Me!
	</button>
</section>
`;

export const CodeSnippetButtonTSConst = `
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
	public isLoading!: boolean;

	constructor() {}

	ngOnInit(): void {
		this.isLoading = false;
	}

	public clickedButton(): void {
		this.isLoading = true;

		setTimeout(() => {
			this.isLoading = false;
		}, 2000);
	}
}
`;

export const CodeSnippetButtonModuleConst = `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
	imports: [
		CommonModule,
		MatButtonModule,
		MatIconModule,
		MatProgressSpinnerModule,
	],
})
export class ButtonModule {}

`;
