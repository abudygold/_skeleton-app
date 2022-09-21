export const CodeSnippetDropdownHTMLConst = `
<mat-form-field class="input-classic"
	floatLabel="never">
	<mat-label>Basic</mat-label>

	<mat-select>
		<mat-option>-- None --</mat-option>

		<mat-option [value]="option"
			*ngFor="let option of ['One', 'Two', 'Three']">
			{{ option }}
		</mat-option>
	</mat-select>
</mat-form-field>

<mat-form-field class="input-classic"
	floatLabel="never">
	<mat-label>Multiple</mat-label>
	<mat-select [formControl]="toppings"
		multiple>
		<mat-select-trigger>
			<span *ngFor="let option of toppings.value; let optionLast = last">
				<ng-container *ngIf="!optionLast">
					{{ option }},
				</ng-container>
				<ng-container *ngIf="optionLast">
					{{ option }}
				</ng-container>
			</span>
		</mat-select-trigger>
		<mat-option *ngFor="let topping of toppingList"
			[value]="topping">{{topping}}</mat-option>
	</mat-select>
</mat-form-field>
`;

export const CodeSnippetDropdownTSConst = `
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-dropdown',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
	public toppings!: FormControl;
	public toppingList!: string[];

	constructor() {}

	ngOnInit(): void {
		this.toppings = new FormControl();
		this.toppingList = [
			'Extra cheese',
			'Mushroom',
			'Onion',
			'Pepperoni',
			'Sausage',
			'Tomato',
		];
	}
}
`;

export const CodeSnippetDropdownModuleConst = `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatSelectModule,
	],
})
export class DropdownModule {}
`;
