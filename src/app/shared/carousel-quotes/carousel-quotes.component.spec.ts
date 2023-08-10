import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselQuotesComponent } from './carousel-quotes.component';

describe('CarouselQuotesComponent', () => {
  let component: CarouselQuotesComponent;
  let fixture: ComponentFixture<CarouselQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
