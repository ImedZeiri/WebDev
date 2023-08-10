import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressWrapComponent } from './progress-wrap.component';

describe('ProgressWrapComponent', () => {
  let component: ProgressWrapComponent;
  let fixture: ComponentFixture<ProgressWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressWrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
