import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADLLibraryCreateComponent } from './page/adl-library-create';
import { ADLLibraryEditComponent } from './page/adl-library-edit';
import { ADLLibraryPipeComponent } from './page/adl-library-pipe';
import { ADLLibrarySearchComponent } from './page/adl-library-search';
import { ADLLibraryViewListComponent } from './page/adl-library-view-list';

const routes: Routes = [
	{
		path: 'search',
		component: ADLLibrarySearchComponent,
	},
	{
		path: 'view-list',
		component: ADLLibraryViewListComponent,
	},
	{
		path: 'create',
		component: ADLLibraryCreateComponent,
	},
	{
		path: 'edit',
		component: ADLLibraryEditComponent,
	},
	{
		path: 'pipe-directive',
		component: ADLLibraryPipeComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ADLLibraryRoutingModule {}
