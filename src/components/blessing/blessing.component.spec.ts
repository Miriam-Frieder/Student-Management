import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlessingComponent } from './blessing.component';

describe('BlessingComponent', () => {
  let component: BlessingComponent;
  let fixture: ComponentFixture<BlessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlessingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
