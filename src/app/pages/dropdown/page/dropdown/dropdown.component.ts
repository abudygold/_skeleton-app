import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
	CodeSnippetDropdownHTMLConst,
	CodeSnippetDropdownModuleConst,
	CodeSnippetDropdownTSConst,
} from '../../shared/const';

@Component({
	selector: 'app-dropdown',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
	public isShowSnippet!: boolean;
	public codeSnippet!: string;
	public codeSnippetTS!: string;
	public codeSnippetModule!: string;
	public toppings!: FormControl;
	public toppingList!: string[];

	constructor() {}

	ngOnInit(): void {
		this.isShowSnippet = false;
		this.codeSnippet = CodeSnippetDropdownHTMLConst;
		this.codeSnippetTS = CodeSnippetDropdownTSConst;
		this.codeSnippetModule = CodeSnippetDropdownModuleConst;
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
