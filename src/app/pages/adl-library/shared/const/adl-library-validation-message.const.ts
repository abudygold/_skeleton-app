export const UserValidationMessageConst = {
	firstName: [{ type: 'required', message: 'First Name is required' }],
	lastName: [{ type: 'required', message: 'Last Name is required' }],
	email: [
		{ type: 'required', message: 'Email is required' },
		{ type: 'email', message: 'Email must be a valid email address' },
	],
	itemName: [{ type: 'required', message: 'Item Name is required' }],
};
