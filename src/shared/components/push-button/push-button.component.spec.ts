import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushButtonComponent } from './push-button.component';

describe('PushButtonComponent', () => {
  let component: PushButtonComponent;
  let fixture: ComponentFixture<PushButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PushButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
