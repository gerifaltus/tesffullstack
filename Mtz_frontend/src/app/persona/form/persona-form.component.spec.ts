import { ComponentFixture, TestBed } from '@angular/core/testing';
import personaFormComponent from './persona-form.component';



describe('personaFormComponent', () => {
  let component: personaFormComponent;
  let fixture: ComponentFixture<personaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [personaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(personaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
