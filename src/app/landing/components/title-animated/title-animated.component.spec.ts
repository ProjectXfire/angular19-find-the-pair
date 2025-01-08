import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAnimatedComponent } from './title-animated.component';

describe('TitleAnimatedComponent', () => {
  let component: TitleAnimatedComponent;
  let fixture: ComponentFixture<TitleAnimatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleAnimatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleAnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
