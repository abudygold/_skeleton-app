import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { HighlightModule } from 'ngx-highlightjs';
import { AvatarRoutingModule } from './avatar-routing.module';
import { AvatarComponent } from './page/avatar';

@NgModule({
	declarations: [AvatarComponent],
	imports: [
		CommonModule,
		AvatarRoutingModule,
		MatIconModule,
		MatDividerModule,
		MatButtonModule,
		HighlightModule,
	],
})
export class AvatarModule {}
