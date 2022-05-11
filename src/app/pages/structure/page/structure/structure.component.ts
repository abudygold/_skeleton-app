import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
	name: string;
	children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
	{
		name: 'src',
		children: [
			{
				name: 'app',
				children: [
					{
						name: 'core',
						children: [
							{
								name: 'auth | interceptor | navigation | shared enum / model / util',
							},
						],
					},
					{
						name: 'layout',
						children: [
							{
								name: 'component',
								children: [
									{
										name: 'footer',
										children: [
											{
												name: 'footer.component.ts | html | css | spec.ts',
											},
										],
									},
									{
										name: 'header',
										children: [
											{
												name: 'header.component.ts | html | css | spec.ts',
											},
										],
									},
								],
							},
							{
								name: 'page',
								children: [
									{
										name: 'base-layout',
									},
								],
							},
							{
								name: 'shared',
								children: [{ name: 'const | enum | model' }],
							},
						],
					},
					{
						name: 'pages',
						children: [
							{
								name: 'heroes',
								children: [
									{
										name: 'component',
										children: [
											{
												name: 'hero-filter',
												children: [
													{
														name: 'hero-filter.component.ts | html | css | spec.ts',
													},
												],
											},
											{
												name: 'hero-table',
												children: [
													{
														name: 'hero-table.component.ts | html | css | spec.ts',
													},
												],
											},
										],
									},
									{
										name: 'page',
										children: [
											{
												name: 'hero-list',
												children: [
													{
														name: 'hero-list.component.ts | html | css | spec.ts',
													},
												],
											},
										],
									},
									{
										name: 'shared',
										children: [
											{
												name: 'const',
												children: [
													{
														name: 'hero-list.service-path.const.ts',
													},
													{
														name: 'hero-list.breadcrumb.const.ts',
													},
													{
														name: 'hero-list.service-path.const.ts',
													},
													{
														name: 'hero-list.validation-messge.const.ts',
													},
												],
											},
											{
												name: 'model',
												children: [
													{
														name: 'hero-list.model',
													},
													{
														name: 'hero-list-param-req.model',
													},
													{
														name: 'hero-list-req.model',
													},
												],
											},
										],
									},
								],
							},
						],
					},
					{
						name: 'ui',
						children: [
							{
								name: 'component | pipes | directive',
							},
						],
					},
				],
			},
			{
				name: 'app-config.const.ts',
			},
			{
				name: 'app-routing.module.ts',
			},
			{
				name: 'app-component.ts',
			},
			{
				name: 'app-module.ts',
			},
		],
	},
	{
		name: 'assets',
		children: [
			{
				name: 'images',
			},
		],
	},
	{
		name: 'styles',
		children: [
			{
				name: 'bootstrap | themes | fonts | styles.scss',
			},
		],
	},
];

@Component({
	selector: 'app-structure',
	templateUrl: './structure.component.html',
	styleUrls: ['./structure.component.scss'],
})
export class StructureComponent implements OnInit {
	treeControl: NestedTreeControl<FoodNode>;
	dataSource: MatTreeNestedDataSource<FoodNode>;

	constructor() {
		this.treeControl = new NestedTreeControl<FoodNode>(
			node => node.children
		);
		this.dataSource = new MatTreeNestedDataSource<FoodNode>();

		setTimeout(() => {
			this.expandedTree(this.dataSource.data);
		}, 500);

		this.dataSource.data = TREE_DATA;
	}

	hasChild = (_: number, node: FoodNode) =>
		!!node.children && node.children.length > 0;

	ngOnInit(): void {}

	private expandedTree(data: FoodNode[]): void {
		data.forEach(each => {
			this.treeControl.expand(each);

			if (each.children) {
				this.expandedTree(each.children);
			}
		});
	}
}
