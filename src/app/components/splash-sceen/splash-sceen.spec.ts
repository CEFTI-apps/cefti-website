import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashSceen } from './splash-sceen';

describe('SplashSceen', () => {
  let component: SplashSceen;
  let fixture: ComponentFixture<SplashSceen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplashSceen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplashSceen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
