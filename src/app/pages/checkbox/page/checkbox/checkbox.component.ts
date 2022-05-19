import { Component, OnInit } from '@angular/core';
import {
	CodeSnippetChecboxHTMLConst,
	CodeSnippetChecboxModuleConst,
	CodeSnippetChecboxTSConst,
} from '../../shared/const';

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
	public isShowSnippet!: boolean;
	public codeSnippet!: string;
	public codeSnippetTS!: string;
	public codeSnippetModule!: string;

	public allComplete!: boolean;
	public task!: Task;

	constructor() {}

	ngOnInit(): void {
		this.isShowSnippet = false;
		this.codeSnippet = CodeSnippetChecboxHTMLConst;
		this.codeSnippetTS = CodeSnippetChecboxTSConst;
		this.codeSnippetModule = CodeSnippetChecboxModuleConst;
		this.task = {
			name: 'Select All',
			completed: false,
			subtasks: [
				{ name: 'Primary', completed: false },
				{ name: 'Accent', completed: false },
				{ name: 'Warn', completed: false },
			],
		};

		this.allComplete = false;
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
