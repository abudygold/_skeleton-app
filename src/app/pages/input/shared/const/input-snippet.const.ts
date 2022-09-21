export const CodeSnippetInputHTMLConst = `
/* No Icon */
<mat-form-field class="input-classic input-no-hint"
	floatLabel="never">
	<input matInput
		placeholder="No Icon"
		autocomplete="off">
</mat-form-field>

<mat-form-field class="input-classic input-no-hint"
	floatLabel="never">
	<input matInput
		placeholder="No Icon"
		autocomplete="off">
</mat-form-field>

<mat-form-field class="input-classic input-no-hint"
	floatLabel="never">
	<input matInput
		placeholder="No Icon"
		autocomplete="off"
		[formControl]="formDisabled">
</mat-form-field>

<mat-form-field class="input-classic input-no-hint"
	floatLabel="never">
	<input matInput
		placeholder="No Icon"
		autocomplete="off"
		[formControl]="form">
</mat-form-field>

<mat-error align="start">
	<p class="font-12px"
		*ngIf="form.touched && form.hasError('required')">
		No Icon is Required
	</p>
</mat-error>


/* Icon Left */
<mat-form-field class="input-classic input-no-hint"
	floatLabel="never">
	<input matInput
		placeholder="Icon Left"
		autocomplete="off">

	<mat-icon matPrefix
		class="pointer mr-2">search</mat-icon>
</mat-form-field>

<mat-form-field class="input-classic input-no-hint"
	floatLabel="never">
	<input matInput
		placeholder="Icon Left"
		autocomplete="off">

	<mat-icon matPrefix
		class="pointer mr-2">search</mat-icon>
</mat-form-field>

<mat-form-field class="input-classic input-no-hint"
	floatLabel="never">
	<input matInput
		placeholder="Icon Left"
		autocomplete="off"
		[formControl]="formDisabled">

	<mat-icon matPrefix
		class="mr-2">search</mat-icon>
</mat-form-field>

<mat-form-field class="input-classic input-no-hint"
	floatLabel="never">
	<input matInput
		placeholder="Icon Left"
		autocomplete="off"
		[formControl]="form">

	<mat-icon matPrefix
		class="pointer mr-2">search</mat-icon>
</mat-form-field>

<mat-error align="start">
	<p class="font-12px"
		*ngIf="form.touched && form.hasError('required')">
		Icon Left is Required
	</p>
</mat-error>

/* Icon Right */
<mat-form-field class="input-classic input-no-hint"
	floatLabel="never">
	<input matInput
		placeholder="Icon Right"
		autocomplete="off">

	<mat-icon matSuffix
		class="pointer ml-2">close</mat-icon>
</mat-form-field>

<mat-form-field class="input-classic input-no-hint"
	floatLabel="never">
	<input matInput
		placeholder="Icon Right"
		autocomplete="off">

	<mat-icon matSuffix
		class="pointer ml-2">close</mat-icon>
</mat-form-field>

<mat-form-field class="input-classic input-no-hint"
	floatLabel="never">
	<input matInput
		placeholder="Icon Right"
		autocomplete="off"
		[formControl]="formDisabled">

	<mat-icon matSuffix
		class="ml-2">close</mat-icon>
</mat-form-field>

<mat-form-field class="input-classic input-no-hint"
	floatLabel="never">
	<input matInput
		placeholder="Icon Right"
		autocomplete="off"
		[formControl]="form">

	<mat-icon matSuffix
		class="pointer ml-2">close</mat-icon>
</mat-form-field>

<mat-error align="start">
	<p class="font-12px"
		*ngIf="form.touched && form.hasError('required')">
		Icon Right is Required
	</p>
</mat-error>

/* Double Icon */
<mat-form-field class="input-classic input-no-hint"
	floatLabel="never">
	<input matInput
		placeholder="Double Icon"
		autocomplete="off">

	<mat-icon matPrefix
		class="pointer mr-2">search</mat-icon>
	<mat-icon matSuffix
		class="pointer ml-2">close</mat-icon>
</mat-form-field>

<mat-form-field class="input-classic input-no-hint"
	floatLabel="never">
	<input matInput
		placeholder="Double Icon"
		autocomplete="off">

	<mat-icon matPrefix
		class="pointer mr-2">search</mat-icon>
	<mat-icon matSuffix
		class="pointer ml-2">close</mat-icon>
</mat-form-field>

<mat-form-field class="input-classic input-no-hint"
	floatLabel="never">
	<input matInput
		placeholder="Double Icon"
		autocomplete="off"
		[formControl]="formDisabled">

	<mat-icon matPrefix
		class="mr-2">search</mat-icon>
	<mat-icon matSuffix
		class="ml-2">close</mat-icon>
</mat-form-field>

<mat-form-field class="input-classic input-no-hint"
	floatLabel="never">
	<input matInput
		placeholder="Double Icon"
		autocomplete="off"
		[formControl]="form">

	<mat-icon matPrefix
		class="pointer mr-2">search</mat-icon>
	<mat-icon matSuffix
		class="pointer ml-2">close</mat-icon>
</mat-form-field>

<mat-error align="start">
	<p class="font-12px"
		*ngIf="form.touched && form.hasError('required')">
		Double Icon is Required
	</p>
</mat-error>
`;

export const CodeSnippetInputTSConst = `
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
	public form!: FormControl;
	public formDisabled!: FormControl;

	constructor() {}

	ngOnInit(): void {
		this.form = new FormControl(null, Validators.required);
		this.form.markAllAsTouched();
		this.formDisabled = new FormControl(
			{
				value: null,
				disabled: true,
			},
			Validators.required
		);
	}
}
`;

export const CodeSnippetInputModuleConst = `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
	],
})
export class InputModule {}
`;
