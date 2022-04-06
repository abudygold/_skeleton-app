import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseService, ButtonModel, TableModel } from 'axiata-ui-framework';
import { Subscription } from 'rxjs';
import {
	ExampleFormConst,
	UserServicePathConst,
	UserTableColumnConst,
	UserTableLabelConst,
} from '../../shared/const';
import { UserModel } from '../../shared/model';

@Component({
	selector: 'app-example',
	templateUrl: './example.component.html',
	styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit, OnDestroy {
	public isLoading!: boolean;
	public table!: TableModel;
	public formConfig: any;

	private subscribers: Subscription[] = [];

	constructor(private baseService: BaseService) {}

	ngOnInit(): void {
		this.isLoading = false;
		this.formConfig = ExampleFormConst;
		this.subscribers = [];

		this.initTable();
		this.getViewListService();
	}

	private initTable(): void {
		const detailButton = new ButtonModel(
			'Detail',
			'primary',
			'detail',
			'flat'
		);
		const editButton = new ButtonModel('Edit', 'warn', 'edit', 'stroked');
		const deleteButton = new ButtonModel(
			'Delete',
			'accent',
			'delete',
			'flat'
		);

		this.table = new TableModel(
			[],
			0,
			UserTableColumnConst,
			UserTableLabelConst,
			1,
			10,
			[detailButton, editButton, deleteButton],
			true
		);
	}

	private getViewListService(): void {
		this.isLoading = true;

		const url =
			UserServicePathConst +
			'?page=' +
			this.table.page +
			'&limit=' +
			this.table.pageSize;

		const subs = this.baseService
			.getDataPaging(url, UserModel)
			.subscribe(resp => {
				if (resp) {
					this.table.totalData = resp.total;
					this.table.dataSource.data = resp.data;
				}

				this.isLoading = false;
			});

		this.subscribers.push(subs);
	}

	public onClickButton(event: { row: object; action: string }): void {
		if (!event) {
			return;
		}

		if (event.action === 'detail') {
			console.log('--- Trigger Navigate to Detail Page Here ---', event);
		} else if (event.action === 'edit') {
			console.log('--- Trigger Navigate to Edit Page Here ---', event);
		} else if (event.action === 'delete') {
			console.log('--- Trigger to Delete Here ---', event);
		}
	}

	public updateOutput(type: string, event: any): void {
		if (type === 'button') {
			console.log('--- Clicked Button ---', event);
		} else if (type === 'autocomplete') {
			console.log('--- Update Autocomplete ---', event);
		} else if (type === 'inputText') {
			console.log('--- Update Input Text ---', event);
		} else if (type === 'textArea') {
			console.log('--- Update Textarea ---', event);
		} else if (type === 'search') {
			console.log('--- Update Search ---', event);
		}
	}

	// public updateValue(input: string): void {
	// 	console.log('--- Update Value ---', input);
	// }

	// public updateRadioButtonSelected(event: any): void {
	// 	console.log('--- Update Radio / Checkbox Button ---', event);
	// }

	// public updateSearch(input: string): void {
	// 	console.log('--- Update Search ---', input);
	// }

	// public updateSelect(value: string): void {
	// 	console.log('--- Update Select ---', value);
	// }

	// public selectedAutocomplete(value: string): void {
	// 	console.log('--- Update Autocomplete ---', value);
	// }

	ngOnDestroy(): void {
		this.subscribers.forEach(each => each.unsubscribe());
	}
}
