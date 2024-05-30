import { Component, OnInit, inject } from '@angular/core';
import { Persona } from '../../model/persona';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-persona-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './persona-form.component.html',
  styleUrl: './persona-form.component.scss'
})
export default class personaFormComponent implements OnInit{
  

  private fb = inject(FormBuilder);
  private router = inject(Router)
  private service = inject(PersonaService);
  private route = inject(ActivatedRoute);
  form?: FormGroup;
  persona?: Persona;
  private personas:Persona[] = [];

  

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("Id"+id);
    if(id){
      console.log('Entro al if');
      this.service.getPersonaById(parseInt(id)).subscribe(Persona => {

        this.personas = Persona.data;
        this.persona = this.personas[0];
        this.form = this.fb.group({
          nombre:[this.personas[0].nombre, [Validators.required]],
          apellido:[this.personas[0].apellido, [Validators.required]],
          fechaNacimiento:[this.personas[0].fechaNacimiento, [Validators.required]],
          puesto:[this.personas[0].puesto, [Validators.required]],
          sueldo:[this.personas[0].sueldo, [Validators.required]]
        });
      })
    }else{
      console.log('Se fue al else');
      this.form = this.fb.group({
        nombre:['', [Validators.required]],
        apellido:['', [Validators.required]],
        fechaNacimiento:['', [Validators.required]],
        puesto:['', [Validators.required]],
        sueldo:['', [Validators.required]]
      });
    }
  }

  guardar(){
    const persona = this.form!.value;
    if(this.persona){
      this.service.updatePersona(this.persona.id, persona).subscribe(() => {
        this.router.navigate(['/']);
      });
    }else{
      this.service.createPersona(persona).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }


}
