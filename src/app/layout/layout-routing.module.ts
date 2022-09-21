import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './page/layout';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: 'accordion',
				loadChildren: () =>
					import('../pages/accordion/accordion.module').then(
						m => m.AccordionModule
					),
			},
			{
				path: 'alert',
				loadChildren: () =>
					import('../pages/alert/alert.module').then(
						m => m.AlertModule
					),
			},
			{
				path: 'avatar',
				loadChildren: () =>
					import('../pages/avatar/avatar.module').then(
						m => m.AvatarModule
					),
			},
			{
				path: 'breadcrumb',
				loadChildren: () =>
					import('../pages/breadcrumb/breadcrumb.module').then(
						m => m.BreadcrumbModule
					),
			},
			{
				path: 'checkbox',
				loadChildren: () =>
					import('../pages/checkbox/checkbox.module').then(
						m => m.CheckboxModule
					),
			},
			{
				path: 'picker',
				loadChildren: () =>
					import('../pages/picker/picker.module').then(
						m => m.PickerModule
					),
			},
			{
				path: 'dropdown',
				loadChildren: () =>
					import('../pages/dropdown/dropdown.module').then(
						m => m.DropdownModule
					),
			},
			{
				path: 'input',
				loadChildren: () =>
					import('../pages/input/input.module').then(
						m => m.InputModule
					),
			},
			{
				path: 'button',
				loadChildren: () =>
					import('../pages/button/button.module').then(
						m => m.ButtonModule
					),
			},
			{
				path: 'typography',
				loadChildren: () =>
					import('../pages/typography/typography.module').then(
						m => m.TypographyModule
					),
			},
			{
				path: 'adl-library',
				loadChildren: () =>
					import('../pages/adl-library/adl-library.module').then(
						m => m.ADLLibraryModule
					),
			},
			{
				path: 'file-structure',
				loadChildren: () =>
					import('../pages/structure/structure.module').then(
						m => m.StructureModule
					),
			},
			{
				path: 'tooltip',
				loadChildren: () =>
					import('../pages/tooltip/tooltip.module').then(
						m => m.TooltipModule
					),
			},
			{
				path: 'tabs',
				loadChildren: () =>
					import('../pages/tabs/tabs.module').then(m => m.TabsModule),
			},
			{
				path: 'dialog',
				loadChildren: () =>
					import('../pages/dialog/dialog.module').then(
						m => m.DialogModule
					),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LayoutRoutingModule {}
