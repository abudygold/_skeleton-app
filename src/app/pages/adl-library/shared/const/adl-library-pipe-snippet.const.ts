export const CodeSnippetPipeHTMLConst = `
<form [formGroup]="form">
	<div class="row">
		<div class="col-md-12 col-12">
			<div class="form-group">
				<mat-form-field class="input-classic input-no-hint"
					floatLabel="never">
					<input matInput
						placeholder="Input Currency : 1.000.000"
						autocomplete="off"
						formControlName="inputCurrency"
						appInputCurrency
						appOnlyNumber>
				</mat-form-field>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col-md-12 col-12">
			<div class="form-group">
				<mat-form-field class="input-classic input-no-hint"
					floatLabel="never">
					<input matInput
						placeholder="Only Number: 123456789"
						autocomplete="off"
						formControlName="onlyNumber"
						appOnlyNumber>
				</mat-form-field>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col-md-12 col-12">
			<div class="form-group">
				<mat-form-field class="input-classic input-no-hint"
					floatLabel="never">
					<input matInput
						placeholder="Input Decimal: 10,99"
						autocomplete="off"
						formControlName="inputDecimal"
						appInputDecimal>
				</mat-form-field>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col-md-12 col-12">
			<div class="form-group">
				<mat-form-field class="input-classic input-no-hint"
					floatLabel="never">
					<input matInput
						placeholder="Input Number: 123456789"
						autocomplete="off"
						formControlName="inputNumber"
						appInputNumber>
				</mat-form-field>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col-md-12 col-12">
			<div class="form-group">
				<mat-form-field class="input-classic input-no-hint"
					floatLabel="never">
					<input matInput
						placeholder="Input Rupiah: Rp 2.000.000"
						autocomplete="off"
						formControlName="inputRupiah"
						appInputRupiah>
				</mat-form-field>
			</div>
		</div>
	</div>
</form>
`;

export const CodeSnippetDirectiveHTMLConst = `
<p>
	Decimal Number: {{ 123456789 | decimalNumber }}
</p>

<p>
	Rupiah: {{ 123456789 | rupiah }}
</p>

<div class="row">
	<div class="col-12 text-center">
		<p>Safe Style</p>

		<div [style.background-image]="'url(' + pictureUrl + ')' | safe: 'style'"
			class="pic bg-pic"></div>
	</div>
</div>

<div class="row">
	<div class="col-12 text-center">
		<p>Safe Picture URL</p>

		<img [src]="pictureUrl | safe: 'url'"
			class="pic"
			alt="Logo">
	</div>
</div>

<div class="row">
	<div class="col-12 text-center">
		<p>Safe Video URL</p>

		<iframe [src]="catVideoEmbed | safe: 'resourceUrl'"
			width="640"
			height="390"></iframe>
	</div>
</div>

<div class="row">
	<div class="col-12 text-center">
		<p>Safe HTML</p>

		<pre [innerHTML]="htmlContent | safe: 'html'"></pre>
	</div>
</div>
`;

export const CodeSnippetPipeTSConst = `
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-adl-library-pipe',
	templateUrl: './adl-library-pipe.component.html',
	styleUrls: ['./adl-library-pipe.component.scss'],
})
export class ADLLibraryPipeComponent implements OnInit {
	public form!: FormGroup;

	constructor() {}

	ngOnInit(): void {
		this.initForm();
	}

	private initForm(): void {
		this.form = new FormGroup({
			inputCurrency: new FormControl(null),
			onlyNumber: new FormControl(null),
			inputDecimal: new FormControl(null),
			inputNumber: new FormControl(null),
			inputRupiah: new FormControl(null),
		});
	}
}
`;

export const CodeSnippetDirectiveTSConst = `
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-adl-library-pipe',
	templateUrl: './adl-library-pipe.component.html',
	styleUrls: ['./adl-library-pipe.component.scss'],
})
export class ADLLibraryPipeComponent implements OnInit {
	public form!: FormGroup;
	public htmlContent!: string;
	public pictureUrl!: string;
	public catVideoEmbed!: string;

	constructor() {}

	ngOnInit(): void {
		this.htmlContent = '<h1>Lorem ipsum dolor sit amet.</h1>';
		this.pictureUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
		this.catVideoEmbed = 'https://www.youtube.com/embed/QH2-TGUlwu4';

		this.initForm();
	}

	private initForm(): void {
		this.form = new FormGroup({
			inputCurrency: new FormControl(null),
			onlyNumber: new FormControl(null),
			inputDecimal: new FormControl(null),
			inputNumber: new FormControl(null),
			inputRupiah: new FormControl(null),
		});
	}
}
`;

export const CodeSnippetPipeModuleConst = `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
	DecimalNumberModule,
	FormatInputModule,
	RupiahModule,
	SafePipeModule,
} from 'adl-ui-framework';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		FormatInputModule,
		DecimalNumberModule,
		RupiahModule,
		SafePipeModule,
	],
})
export class ADLLibraryModule {}
`;
