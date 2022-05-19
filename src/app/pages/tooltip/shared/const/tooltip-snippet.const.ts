export const CodeSnippetTooltipHTMLConst = `
<p class="mb-1">
	Above Left

	<mat-icon #tooltip="matTooltip"
		matTooltip="Standar tooltip"
		[matTooltipPosition]="'above'"
		matTooltipClass="start">info_outline</mat-icon>
</p>
<p class="mb-1">
	Above

	<mat-icon #tooltip="matTooltip"
		matTooltip="Standar tooltip"
		[matTooltipPosition]="'above'">info_outline</mat-icon>
</p>
<p class="mb-1">
	Above Right

	<mat-icon #tooltip="matTooltip"
		matTooltip="Standar tooltip"
		[matTooltipPosition]="'above'"
		matTooltipClass="end">info_outline</mat-icon>
</p>
<p class="mb-1">
	Below Left

	<mat-icon #tooltip="matTooltip"
		matTooltip="Standar tooltip"
		[matTooltipPosition]="'below'"
		matTooltipClass="start">info_outline</mat-icon>
</p>
<p class="mb-1">
	Below

	<mat-icon #tooltip="matTooltip"
		matTooltip="Standar tooltip"
		[matTooltipPosition]="'below'">info_outline</mat-icon>
</p>
<p class="mb-1">
	Below Right

	<mat-icon #tooltip="matTooltip"
		matTooltip="Standar tooltip"
		[matTooltipPosition]="'below'"
		matTooltipClass="end">info_outline</mat-icon>
</p>
<p class="mb-1">
	Left

	<mat-icon #tooltip="matTooltip"
		matTooltip="Standar tooltip"
		[matTooltipPosition]="'left'">info_outline</mat-icon>
</p>
<p class="mb-1">
	Right

	<mat-icon #tooltip="matTooltip"
		matTooltip="Standar tooltip"
		[matTooltipPosition]="'right'">info_outline</mat-icon>
</p>
`;

export const CodeSnippetTooltipModuleConst = `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	imports: [
		CommonModule,
		MatTooltipModule,
		MatIconModule,
	],
})
export class TooltipModule {}
`;
