export class NavigationModel {
	public name!: string;
	public level!: number;
	public target!: string;
	public icon?: string;
	public parentActive?: string[];
	public subMenu?: NavigationModel[];
}
