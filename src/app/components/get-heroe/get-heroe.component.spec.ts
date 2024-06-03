import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHeroeComponent } from './get-heroe.component';

describe('GetHeroeComponent', () => {
  let component: GetHeroeComponent;
  let fixture: ComponentFixture<GetHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetHeroeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
