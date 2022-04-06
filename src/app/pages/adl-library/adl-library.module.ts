import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchModule, TableModule } from 'axiata-ui-framework';
import { HighlightModule } from 'ngx-highlightjs';
import { ADLLibraryRoutingModule } from './adl-library-routing.module';
import { ADLLibraryCreateComponent } from './page/adl-library-create';
import { ADLLibraryEditComponent } from './page/adl-library-edit';
import { ADLLibrarySearchComponent } from './page/adl-library-search';
import { ADLLibraryViewListComponent } from './page/adl-library-view-list';

@NgModule({
	declarations: [
		ADLLibrarySearchComponent,
		ADLLibraryViewListComponent,
		ADLLibraryCreateComponent,
		ADLLibraryEditComponent,
	],
	imports: [
		CommonModule,
		ADLLibraryRoutingModule,
		SearchModule,
		TableModule,
		HighlightModule,
	],
})
export class ADLLibraryModule {}
