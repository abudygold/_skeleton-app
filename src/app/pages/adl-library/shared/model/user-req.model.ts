import { UserItemReqModel } from './user-item-req.model';

export class UserReqModel {
	public id!: string;
	public firstName!: string;
	public lastName!: string;
	public email!: string;
	public items!: UserItemReqModel;

	public clone(source: any): UserReqModel {
		if (source.id) {
			this.id = source.id;
		}
		if (source.firstName) {
			this.firstName = source.firstName;
		}
		if (source.lastName) {
			this.lastName = source.lastName;
		}
		if (source.email) {
			this.email = source.email;
		}
		if (source.items) {
			this.items = source.items.reduce((result: any, each: any) => {
				result.push(new UserItemReqModel().clone(each));
				return result;
			}, []);
		}

		return this;
	}

	public convert(): any {
		return {
			firstName: this.firstName,
			lastName: this.lastName,
			email: this.email,
			// items: this.items.convert(),
		};
	}
}
