import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ADLLibraryPipeComponent } from './adl-library-pipe.component';

describe('ADLLibraryPipeComponent', () => {
	let component: ADLLibraryPipeComponent;
	let fixture: ComponentFixture<ADLLibraryPipeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ADLLibraryPipeComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ADLLibraryPipeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
