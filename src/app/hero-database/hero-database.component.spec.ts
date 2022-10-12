import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDatabaseComponent } from './hero-database.component';

describe('HeroDatabaseComponent', () => {
  let component: HeroDatabaseComponent;
  let fixture: ComponentFixture<HeroDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDatabaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
