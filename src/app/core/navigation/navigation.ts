import { NavigationModel } from '../model';

/* Get Started Menu */
const GetStartedMenuConst: NavigationModel = {
	level: 1,
	name: 'Get Started',
	parentActive: ['/adl-library/search'],
	target: '',
	subMenu: [
		{
			level: 2,
			name: "What's New",
			target: '/adl-library/search',
		},
		{
			level: 2,
			name: 'For Engineers',
			target: '/adl-library/search',
		},
	],
};

/* Design Menu */
const DesignMenuConst: NavigationModel = {
	level: 1,
	name: 'Foundation',
	parentActive: ['/typography', '/color'],
	target: '',
	subMenu: [
		{
			level: 2,
			name: 'Typography',
			target: '/typography',
		},
		{
			level: 2,
			name: 'Color',
			target: '/color',
		},
	],
};

/* Component Menu */
const ComponentMenuConst: NavigationModel = {
	level: 1,
	name: 'Component',
	parentActive: [
		'/accordion',
		'/button',
		'/alert',
		'/avatar',
		'/breadcrumb',
		'/picker',
		'/input',
		'/dropdown',
		'/checkbox',
	],
	target: '',
	subMenu: [
		{
			level: 2,
			name: 'Accordion',
			target: '/accordion',
		},
		{
			level: 2,
			name: 'Button',
			target: '/button',
		},
		{
			level: 2,
			name: 'Alert',
			target: '/alert',
		},
		{
			level: 2,
			name: 'Avatar',
			target: '/avatar',
		},
		{
			level: 2,
			name: 'Breadcrumb',
			target: '/breadcrumb',
		},
		{
			level: 2,
			name: 'Date & Time Picker',
			target: '/picker',
		},
		{
			level: 2,
			name: 'Form',
			parentActive: ['/input', '/dropdown', '/checkbox'],
			target: '',
			subMenu: [
				{
					level: 3,
					name: 'Input',
					target: '/input',
				},
				{
					level: 3,
					name: 'Select',
					target: '/dropdown',
				},
				{
					level: 3,
					name: 'Checkbox',
					target: '/checkbox',
				},
			],
		},
	],
};

/* ADL Library Menu */
const ADLLibraryMenuConst: NavigationModel = {
	level: 1,
	name: 'ADL Library',
	parentActive: [
		'/adl-library/search',
		'/adl-library/view-list',
		'/adl-library/create',
		'/adl-library/edit',
	],
	target: '',
	subMenu: [
		{
			level: 2,
			name: 'Search',
			target: '/adl-library/search',
		},
		{
			level: 2,
			name: 'Base Service',
			parentActive: [
				'/adl-library/view-list',
				'/adl-library/create',
				'/adl-library/edit',
			],
			target: '',
			subMenu: [
				{
					level: 3,
					name: 'View List',
					target: '/adl-library/view-list',
				},
				{
					level: 3,
					name: 'Create New Data',
					target: '/adl-library/create',
				},
				{
					level: 3,
					name: 'Edit Data',
					target: '/adl-library/edit',
				},
			],
		},
	],
};

export const NavigationConst = [
	GetStartedMenuConst,
	DesignMenuConst,
	ComponentMenuConst,
	ADLLibraryMenuConst,
];
