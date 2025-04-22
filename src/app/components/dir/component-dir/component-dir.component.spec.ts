import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDirComponent } from './component-dir.component';

describe('ComponentDirComponent', () => {
  let component: ComponentDirComponent;
  let fixture: ComponentFixture<ComponentDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentDirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
