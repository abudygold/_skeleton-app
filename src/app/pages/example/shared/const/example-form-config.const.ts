import {
	AutocompleteModel,
	ButtonModel,
	CheckboxModel,
	ChipsModel,
	InputTextModel,
	RadioButtonModel,
	SearchModel,
	SelectModel,
} from 'axiata-ui-framework';

const ExampleAutoCompleteConst = new AutocompleteModel(
	'Example Autocomplete',
	['One', 'Two', 'Three', 'Four', 'Five'],
	'Sample Autocomplete',
	'One'
);

const ExampleSearchConst = new SearchModel('Input Your Keyword');

const ExampleChipsConst = new ChipsModel(
	'Example Chips',
	['One', 'Two', 'Three', 'Four', 'Five'],
	false,
	true,
	'Sorry',
	['One', 'Two', 'Three', 'Four', 'Five'],
	['One', 'Two']
);

const ExampleInputTextConst = new InputTextModel(
	'Example Input Text',
	'text',
	'',
	'This is dummy value'
);

const ExampleTextAreaConst = new InputTextModel(
	'Example Textare',
	'',
	'',
	'This is dummy value',
	false,
	true
);

const ExampleCheckboxConst = new CheckboxModel(
	'Example Checkbox',
	'Are you hungry?',
	false,
	false,
	[],
	'after'
);
const ExampleRadioButtonConst = new RadioButtonModel('Example Radio Button', [
	'Man',
	'Girl',
]);

const ExampleButtonBasicConst = new ButtonModel(
	'Click Me!',
	'primary',
	'key for basic'
);

const ExampleButtonRaisedConst = new ButtonModel(
	'Click Me!',
	'primary',
	'key for raised',
	'raised'
);

const ExampleButtonStrokedConst = new ButtonModel(
	'Click Me!',
	'warn',
	'key for stroked',
	'stroked'
);

const ExampleButtonFlatConst = new ButtonModel(
	'Click Me!',
	'primary',
	'key for flat',
	'flat'
);

const ExampleButtonIconConst = new ButtonModel(
	'Click Me!',
	'primary',
	'key for icon',
	'icon',
	false,
	'home'
);

const ExampleButtonFABConst = new ButtonModel(
	'Click Me!',
	'accent',
	'key for fab',
	'fab',
	false,
	'delete'
);

const ExampleButtonMiniFABConst = new ButtonModel(
	'Click Me!',
	'primary',
	'key for mini fab',
	'minifab',
	false,
	'home'
);

const ExampleButtonLinkConst = new ButtonModel(
	'Click Me! (google.com)',
	'warn',
	'',
	'stroked',
	false,
	'home',
	true,
	'https://google.com'
);

const ExampleSelectOptionConst = new SelectModel(
	'Sample Select',
	['One', 'Two', 'Three', 'Four', 'Five'],
	false,
	'',
	'',
	true
);

export const ExampleFormConst = {
	exampleAutoComplete: ExampleAutoCompleteConst,
	exampleSearch: ExampleSearchConst,
	exampleChips: ExampleChipsConst,
	exampleInputText: ExampleInputTextConst,
	exampleTextArea: ExampleTextAreaConst,
	exampleCheckbox: ExampleCheckboxConst,
	exampleRadioButton: ExampleRadioButtonConst,
	exampleButtonBasic: ExampleButtonBasicConst,
	exampleButtonRaised: ExampleButtonRaisedConst,
	exampleButtonStroked: ExampleButtonStrokedConst,
	exampleButtonFlat: ExampleButtonFlatConst,
	exampleButtonIcon: ExampleButtonIconConst,
	exampleButtonFAB: ExampleButtonFABConst,
	exampleButtonMiniFAB: ExampleButtonMiniFABConst,
	exampleButtonLink: ExampleButtonLinkConst,
	exampleSelectOption: ExampleSelectOptionConst,
};
