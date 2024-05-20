import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerardComponent } from './gerard.component';

describe('GerardComponent', () => {
  let component: GerardComponent;
  let fixture: ComponentFixture<GerardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
