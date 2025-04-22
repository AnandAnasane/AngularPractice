import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRxStateComponent } from './ng-rx-state.component';

describe('NgRxStateComponent', () => {
  let component: NgRxStateComponent;
  let fixture: ComponentFixture<NgRxStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgRxStateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgRxStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
