import { Component, OnInit, inject } from '@angular/core';
import { Person } from '../../model/person';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.scss'
})
export default class PersonFormComponent implements OnInit{
  

  private fb = inject(FormBuilder);
  private router = inject(Router)
  private service = inject(PersonService);
  private route = inject(ActivatedRoute);
  form?: FormGroup;
  person?: Person;
  private persons:Person[] = [];

  

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if(id){
      this.service.getPersonById(parseInt(id)).subscribe(person => {

        this.persons = person.data;
        this.person = this.persons[0];
        this.form = this.fb.group({
          nombre:[this.persons[0].nombre, [Validators.required]],
          apellido:[this.persons[0].apellido, [Validators.required]],
          fechaNacimiento:[this.persons[0].fechaNacimiento, [Validators.required]],
          puesto:[this.persons[0].puesto, [Validators.required]],
          sueldo:[this.persons[0].sueldo, [Validators.required]]
        });
      })
    }else{
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
    const person = this.form!.value;
    if(this.person){
      this.service.updatePerson(this.person.id, person).subscribe(() => {
        this.router.navigate(['/']);
      });
    }else{
      this.service.createPerson(person).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }


}
