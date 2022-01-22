import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantfundingComponent } from './instantfunding.component';

describe('InstantfundingComponent', () => {
  let component: InstantfundingComponent;
  let fixture: ComponentFixture<InstantfundingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstantfundingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantfundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
