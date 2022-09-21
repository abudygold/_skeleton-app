export const CodeSnippetAppConfigConst = `
export const DATE_PICKER_FORMATS = {
	parse: {
		dateInput: 'DD-MM-YYYY',
	},
	display: {
		dateInput: 'MM/DD/YYYY',
		monthYearLabel: 'MMM YYYY',
		dateA11yLabel: 'LL',
		monthYearA11yLabel: 'MMMM YYYY',
	},
};
`;

export const CodeSnippetAppModuleConst = `
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import {
	DateAdapter,
	MAT_DATE_FORMATS,
	MAT_DATE_LOCALE,
} from '@angular/material/core';
import { DATE_PICKER_FORMATS } from './app-config.const';

@NgModule({
	providers: [
		{
			provide: DateAdapter,
			useClass: MomentDateAdapter,
			deps: [MAT_DATE_LOCALE],
		},
		{ provide: MAT_DATE_FORMATS, useValue: DATE_PICKER_FORMATS },
	],
})
export class AppModule {}

`;

export const CodeSnippetPickerHTMLConst = `
/* Select Date */
<mat-form-field class="input-classic input-no-hint"
	floatLabel="never">
	<input matInput
		placeholder="Select Date"
		[matDatepicker]="pickerDate"
		disabled>
	<mat-datepicker-toggle matSuffix
		[for]="pickerDate"></mat-datepicker-toggle>
	<mat-datepicker #pickerDate
		disabled="false"></mat-datepicker>
</mat-form-field>

/* Select Date (Year) */
<mat-form-field class="input-classic input-no-hint"
	floatLabel="never">
	<input matInput
		placeholder="Select Date (Year)"
		[matDatepicker]="pickerMonth"
		disabled>
	<mat-datepicker-toggle matSuffix
		[for]="pickerMonth"></mat-datepicker-toggle>
	<mat-datepicker #pickerMonth
		startView="year"
		disabled="false"></mat-datepicker>
</mat-form-field>

/* Select Date (Multi Year) */
<mat-form-field class="input-classic input-no-hint"
	floatLabel="never">
	<input matInput
		placeholder="Select Date (Multi Year)"
		[matDatepicker]="pickerYear"
		disabled>
	<mat-datepicker-toggle matSuffix
		[for]="pickerYear"></mat-datepicker-toggle>
	<mat-datepicker #pickerYear
		startView="multi-year"
		disabled="false"></mat-datepicker>
</mat-form-field>

/* Timepicker with 12h format */
<mat-form-field class="input-classic input-no-hint"
	floatLabel="never">
	<input matInput
		[(ngModel)]="selectedTime"
		[ngxMatTimepicker]="pickerA"
		placeholder="Picker with 12h format"
		readonly />
	<mat-icon matSuffix
		(click)="pickerA.open()">
		watch_later
	</mat-icon>
</mat-form-field>
<ngx-mat-timepicker #pickerA></ngx-mat-timepicker>

/* Timepicker with 24h format */
<mat-form-field class="input-classic input-no-hint"
	floatLabel="never">
	<input matInput
		[format]="24"
		[(ngModel)]="selectedTime"
		[ngxMatTimepicker]="pickerB"
		placeholder="Timepicker with 24h format"
		readonly />
	<mat-icon matSuffix
		(click)="pickerB.open()">
		watch_later
	</mat-icon>
</mat-form-field>
<ngx-mat-timepicker color="accent"
	#pickerB></ngx-mat-timepicker>
`;

export const CodeSnippetPickerTSConst = `
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-picker',
	templateUrl: './picker.component.html',
	styleUrls: ['./picker.component.scss'],
})
export class PickerComponent implements OnInit {
	public selectedTime: any;

	constructor() {}

	ngOnInit(): void {}
}
`;

export const CodeSnippetPickerModuleConst = `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { PickerComponent } from './page/picker';

@NgModule({
	declarations: [PickerComponent],
	imports: [
		CommonModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatDatepickerModule,
		NgxMatTimepickerModule,
	],
})
export class PickerModule {}
`;
