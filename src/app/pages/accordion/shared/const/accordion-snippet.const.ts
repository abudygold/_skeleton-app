export const CodeSnippetAccordionBasicHTMLConst = `
<mat-accordion class="accordion-basic">
	<mat-expansion-panel>
		<mat-expansion-panel-header>
			<mat-panel-title>
				Accordion 1
			</mat-panel-title>
		</mat-expansion-panel-header>

		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
			dolore magna aliqua.</p>
	</mat-expansion-panel>
	<mat-expansion-panel>
		<mat-expansion-panel-header>
			<mat-panel-title>
				Accordion 2
			</mat-panel-title>
		</mat-expansion-panel-header>

		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
			dolore magna aliqua.</p>
	</mat-expansion-panel>
</mat-accordion>
`;

export const CodeSnippetAccordionWithIconHTMLConst = `
<mat-accordion class="accordion-icon">
	<mat-expansion-panel hideToggle>
		<mat-expansion-panel-header>
			<mat-panel-title>
				<mat-icon class="icon-menu open"
					svgIcon="icon-open"></mat-icon>
				<mat-icon class="icon-menu close"
					svgIcon="icon-close"></mat-icon>

				Accordion 1
			</mat-panel-title>
		</mat-expansion-panel-header>

		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
			dolore magna aliqua.</p>
	</mat-expansion-panel>
	<mat-expansion-panel hideToggle>
		<mat-expansion-panel-header>
			<mat-panel-title>
				<mat-icon class="icon-menu open"
					svgIcon="icon-open"></mat-icon>
				<mat-icon class="icon-menu close"
					svgIcon="icon-close"></mat-icon>

				Accordion 2
			</mat-panel-title>
		</mat-expansion-panel-header>

		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
			dolore magna aliqua.</p>
	</mat-expansion-panel>
</mat-accordion>`;

export const CodeSnippetAccordionAsCardHTMLConst = `
<mat-accordion class="accordion-icon-card">
	<mat-expansion-panel hideToggle>
		<mat-expansion-panel-header>
			<mat-panel-title>
				<mat-icon class="icon-menu open"
					svgIcon="icon-open"></mat-icon>
				<mat-icon class="icon-menu close"
					svgIcon="icon-close"></mat-icon>

				Accordion 1
			</mat-panel-title>
		</mat-expansion-panel-header>

		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
			dolore magna aliqua.</p>
	</mat-expansion-panel>
	<mat-expansion-panel hideToggle>
		<mat-expansion-panel-header>
			<mat-panel-title>
				<mat-icon class="icon-menu open"
					svgIcon="icon-open"></mat-icon>
				<mat-icon class="icon-menu close"
					svgIcon="icon-close"></mat-icon>

				Accordion 2
			</mat-panel-title>
		</mat-expansion-panel-header>

		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
			dolore magna aliqua.</p>
	</mat-expansion-panel>
</mat-accordion>`;

export const CodeSnippetAccordionModuleConst = `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
	declarations: [AccordionComponent],
	imports: [
		CommonModule,
		MatExpansionModule,
	],
})
export class AccordionModule {}
`;
