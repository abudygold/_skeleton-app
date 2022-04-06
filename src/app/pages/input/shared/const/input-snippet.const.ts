export const CodeSnippetConst = `
<div class="row">
	<div class="col-md-2">No Icon</div>
	<div class="col-md-2">
		<mat-form-field class="input-classic input-no-hint"
			floatLabel="never">
			<input matInput
				placeholder="No Icon"
				autocomplete="off">
		</mat-form-field>
	</div>
	<div class="col-md-3">
		<mat-form-field class="input-classic input-no-hint"
			floatLabel="never">
			<input matInput
				placeholder="No Icon"
				autocomplete="off">
		</mat-form-field>
	</div>
	<div class="col-md-3">
		<mat-form-field class="input-classic input-no-hint"
			floatLabel="never">
			<input matInput
				placeholder="No Icon"
				autocomplete="off"
				[formControl]="formDisabled">
		</mat-form-field>
	</div>
	<div class="col-md-2">
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
	</div>
</div>

<div class="row">
	<div class="col-md-2">Icon Left</div>
	<div class="col-md-2">
		<mat-form-field class="input-classic input-no-hint"
			floatLabel="never">
			<input matInput
				placeholder="Icon Left"
				autocomplete="off">

			<mat-icon matPrefix
				class="pointer mr-2">search</mat-icon>
		</mat-form-field>
	</div>
	<div class="col-md-3">
		<mat-form-field class="input-classic input-no-hint"
			floatLabel="never">
			<input matInput
				placeholder="Icon Left"
				autocomplete="off">

			<mat-icon matPrefix
				class="pointer mr-2">search</mat-icon>
		</mat-form-field>
	</div>
	<div class="col-md-3">
		<mat-form-field class="input-classic input-no-hint"
			floatLabel="never">
			<input matInput
				placeholder="Icon Left"
				autocomplete="off"
				[formControl]="formDisabled">

			<mat-icon matPrefix
				class="mr-2">search</mat-icon>
		</mat-form-field>
	</div>
	<div class="col-md-2">
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
	</div>
</div>

<div class="row">
	<div class="col-md-2">Icon Right</div>
	<div class="col-md-2">
		<mat-form-field class="input-classic input-no-hint"
			floatLabel="never">
			<input matInput
				placeholder="Icon Right"
				autocomplete="off">

			<mat-icon matSuffix
				class="pointer ml-2">close</mat-icon>
		</mat-form-field>
	</div>
	<div class="col-md-3">
		<mat-form-field class="input-classic input-no-hint"
			floatLabel="never">
			<input matInput
				placeholder="Icon Right"
				autocomplete="off">

			<mat-icon matSuffix
				class="pointer ml-2">close</mat-icon>
		</mat-form-field>
	</div>
	<div class="col-md-3">
		<mat-form-field class="input-classic input-no-hint"
			floatLabel="never">
			<input matInput
				placeholder="Icon Right"
				autocomplete="off"
				[formControl]="formDisabled">

			<mat-icon matSuffix
				class="ml-2">close</mat-icon>
		</mat-form-field>
	</div>
	<div class="col-md-2">
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
	</div>
</div>

<div class="row">
	<div class="col-md-2">Double Icon</div>
	<div class="col-md-2">
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
	</div>
	<div class="col-md-3">
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
	</div>
	<div class="col-md-3">
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
	</div>
	<div class="col-md-2">
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
	</div>
</div>
`;

export const CodeSnippetTSConst = `
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
