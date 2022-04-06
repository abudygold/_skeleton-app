import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
	AutocompleteModule,
	ButtonModule,
	CheckboxModule,
	ChipsModule,
	InputTextModule,
	RadioButtonModule,
	SearchModule,
	SelectModule,
	TableModule,
} from 'axiata-ui-framework';
import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './page/example/example.component';

@NgModule({
	declarations: [ExampleComponent],
	imports: [
		CommonModule,
		ExampleRoutingModule,
		InputTextModule,
		CheckboxModule,
		RadioButtonModule,
		TableModule,
		ButtonModule,
		SelectModule,
		SearchModule,
		AutocompleteModule,
		ChipsModule,
	],
})
export class ExampleModule {}
