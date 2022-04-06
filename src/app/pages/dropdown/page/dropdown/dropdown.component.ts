import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CodeSnippetConst, CodeSnippetTSConst } from '../../shared/const';

@Component({
	selector: 'app-dropdown',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
	public isShowSnippet!: boolean;
	public codeSnippet!: string;
	public codeSnippetTS!: string;
	public toppings!: FormControl;
	public toppingList!: string[];

	constructor() {}

	ngOnInit(): void {
		this.isShowSnippet = false;
		this.codeSnippet = CodeSnippetConst;
		this.codeSnippetTS = CodeSnippetTSConst;
		this.toppingList = [
			'Extra cheese',
			'Mushroom',
			'Onion',
			'Pepperoni',
			'Sausage',
			'Tomato',
		];

		this.toppings = new FormControl();
	}
}
