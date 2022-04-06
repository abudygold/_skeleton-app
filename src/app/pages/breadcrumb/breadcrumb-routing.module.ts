import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from './page/breadcrumb';

const routes: Routes = [
	{
		path: '',
		component: BreadcrumbComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class BreadcrumbRoutingModule {}
