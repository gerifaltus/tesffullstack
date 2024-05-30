import { ComponentFixture, TestBed } from '@angular/core/testing';

import { personaListComponent } from './persona-list.component';

describe('personaListComponent', () => {
  let component: personaListComponent;
  let fixture: ComponentFixture<personaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [personaListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(personaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
