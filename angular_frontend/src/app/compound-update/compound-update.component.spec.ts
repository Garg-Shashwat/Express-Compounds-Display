import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundUpdateComponent } from './compound-update.component';

describe('CompoundUpdateComponent', () => {
  let component: CompoundUpdateComponent;
  let fixture: ComponentFixture<CompoundUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoundUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompoundUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
