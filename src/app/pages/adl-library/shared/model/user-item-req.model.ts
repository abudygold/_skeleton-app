export class UserItemReqModel {
	public id!: string;
	public itemName!: string;

	public clone(source: any): UserItemReqModel {
		if (source.id) {
			this.id = source.id;
		}
		if (source.itemName) {
			this.itemName = source.itemName;
		}

		return this;
	}

	public convert(): any {
		return this;
	}
}
