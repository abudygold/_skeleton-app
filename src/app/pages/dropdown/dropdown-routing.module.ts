import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownComponent } from './page/dropdown';

const routes: Routes = [
	{
		path: '',
		component: DropdownComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DropdownRoutingModule {}
