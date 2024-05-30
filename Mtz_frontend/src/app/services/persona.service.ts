import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';
import { Response } from '../model/response';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  public getAllPersonas(){
    return this.http.get<Response<Persona>>("http://localhost:8181/api/personas");
  }
  
  public createPersona(request: Persona){
    return this.http.post<Response<Persona>>("http://localhost:8181/api/personas/",request);
  }
  
  public deletePersona(request: Persona){
    return this.http.delete<Response<Persona>>(`http://localhost:8181/api/personas/delete/${request}`);
  }
  
  public getPersonaById(id: number){
    return this.http.get<Response<Persona>>(`http://localhost:8181/api/personas/${id}`);
  }
  
  public updatePersona(id: number, request: Persona){
    return this.http.put<Response<Persona>>(`http://localhost:8181/api/personas/update/${id}`, request);
  }
}
