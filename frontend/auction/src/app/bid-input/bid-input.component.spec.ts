import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidInputComponent } from './bid-input.component';

describe('BidInputComponent', () => {
  let component: BidInputComponent;
  let fixture: ComponentFixture<BidInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
