import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeroesComponent } from './top-heroes.component';

describe('TopHeroesComponent', () => {
  let component: TopHeroesComponent;
  let fixture: ComponentFixture<TopHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopHeroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
