import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './component/header';
import { MenuComponent } from './component/menu';
import { SidebarComponent } from './component/sidebar';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './page/layout';

@NgModule({
	declarations: [
		LayoutComponent,
		SidebarComponent,
		HeaderComponent,
		MenuComponent,
	],
	imports: [
		CommonModule,
		LayoutRoutingModule,
		MatSidenavModule,
		MatToolbarModule,
		MatButtonModule,
		MatListModule,
		MatIconModule,
	],
})
export class LayoutModule {}
