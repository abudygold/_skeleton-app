export const CodeSnippetConst = `
<section>
	<p class="mb-2">
		<mat-checkbox>Check me!</mat-checkbox>
	</p>
	<p class="mb-2">
		<mat-checkbox [disabled]="true">Disabled</mat-checkbox>
	</p>
</section>

<section>
	<span>
		<mat-checkbox [checked]="allComplete"
			[indeterminate]="someComplete()"
			(change)="setAll($event.checked)">
			{{task.name}}
		</mat-checkbox>
	</span>
	<span>
		<ul class="list-style-none">
			<li *ngFor="let subtask of task.subtasks">
				<mat-checkbox [(ngModel)]="subtask.completed"
					(ngModelChange)="updateAllComplete()">
					{{subtask.name}}
				</mat-checkbox>
			</li>
		</ul>
	</span>
</section>
`;

export const CodeSnippetTSConst = `
import { Component, OnInit } from '@angular/core';

export interface Task {
	name: string;
	completed: boolean;
	subtasks?: Task[];
}

@Component({
	selector: 'app-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
	public allComplete!: boolean;
	public task!: Task;

	constructor() {}

	ngOnInit(): void {
		this.allComplete = false;
		this.task = {
			name: 'Select All',
			completed: false,
			subtasks: [
				{ name: 'Primary', completed: false },
				{ name: 'Accent', completed: false },
				{ name: 'Warn', completed: false },
			],
		};
	}

	public updateAllComplete() {
		this.allComplete =
			this.task.subtasks != null &&
			this.task.subtasks.every(t => t.completed);
	}

	public someComplete(): boolean {
		if (this.task.subtasks == null) {
			return false;
		}

		return (
			this.task.subtasks.filter(t => t.completed).length > 0 &&
			!this.allComplete
		);
	}

	public setAll(completed: boolean) {
		this.allComplete = completed;

		if (this.task.subtasks == null) {
			return;
		}

		this.task.subtasks.forEach(t => (t.completed = completed));
	}
}
`;
