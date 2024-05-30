import { Component, inject } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { response } from 'express';
import { Persona } from '../model/persona';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-persona-list',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './persona-list.component.html',
  styleUrl: './persona-list.component.scss'
})
export default class personaListComponent {
  private personaService = inject(PersonaService);

  personas: Persona[] = [];
  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(){
    this.personaService.getAllPersonas().subscribe(response => 
      {
        this.personas = response.data;
      })
  }

  delete(Persona: Persona){
    this.personaService.deletePersona(Persona).subscribe(() => {
      this.loadAll();
    })
  }
}
