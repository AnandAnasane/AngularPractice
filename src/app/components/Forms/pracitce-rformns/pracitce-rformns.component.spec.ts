import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracitceRFormnsComponent } from './pracitce-rformns.component';

describe('PracitceRFormnsComponent', () => {
  let component: PracitceRFormnsComponent;
  let fixture: ComponentFixture<PracitceRFormnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracitceRFormnsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracitceRFormnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
