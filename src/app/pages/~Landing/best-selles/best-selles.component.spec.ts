import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellesComponent } from './best-selles.component';

describe('BestSellesComponent', () => {
  let component: BestSellesComponent;
  let fixture: ComponentFixture<BestSellesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSellesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
