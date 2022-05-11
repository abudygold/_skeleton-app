import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import {
	DecimalNumberModule,
	FormatInputModule,
	RupiahModule,
	SafePipeModule,
	SearchModule,
	TableModule,
} from 'adl-ui-framework';
import { HighlightModule } from 'ngx-highlightjs';
import { ToControlModule } from '../../ui/to-control/to-control.module';
import { ADLLibraryRoutingModule } from './adl-library-routing.module';
import { ADLLibraryFormComponent } from './component/adl-library-form';
import { ADLLibraryCreateComponent } from './page/adl-library-create';
import { ADLLibraryEditComponent } from './page/adl-library-edit';
import { ADLLibraryPipeComponent } from './page/adl-library-pipe';
import { ADLLibrarySearchComponent } from './page/adl-library-search';
import { ADLLibraryViewListComponent } from './page/adl-library-view-list';

@NgModule({
	declarations: [
		ADLLibrarySearchComponent,
		ADLLibraryViewListComponent,
		ADLLibraryCreateComponent,
		ADLLibraryEditComponent,
		ADLLibraryFormComponent,
		ADLLibraryPipeComponent,
	],
	imports: [
		CommonModule,
		ADLLibraryRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatDividerModule,
		MatTabsModule,
		MatIconModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		SearchModule,
		TableModule,
		HighlightModule,
		ToControlModule,
		FormatInputModule,
		DecimalNumberModule,
		RupiahModule,
		SafePipeModule,
	],
})
export class ADLLibraryModule {}
