import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetComponent } from './get.component';

describe('GetComponent', () => {
  let component: GetComponent;
  let fixture: ComponentFixture<GetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
