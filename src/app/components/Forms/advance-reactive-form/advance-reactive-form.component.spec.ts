import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceReactiveFormComponent } from './advance-reactive-form.component';

describe('AdvanceReactiveFormComponent', () => {
  let component: AdvanceReactiveFormComponent;
  let fixture: ComponentFixture<AdvanceReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceReactiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
