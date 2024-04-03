import { Component, inject } from '@angular/core';
import { PersonService } from '../services/person.service';
import { response } from 'express';
import { Person } from '../model/person';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.scss'
})
export default class PersonListComponent {
  private personService = inject(PersonService);

  persons: Person[] = [];
  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(){
    this.personService.getAllPersons().subscribe(response => 
      {
        this.persons = response.data;
      })
  }

  delete(person: Person){
    this.personService.deletePerson(person).subscribe(() => {
      this.loadAll();
    })
  }
}
