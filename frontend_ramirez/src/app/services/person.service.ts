import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../model/person';
import { Response } from '../model/response';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  public getAllPersons(){
    return this.http.get<Response<Person>>("http://localhost:8080/api/persons");
  }
  
  public createPerson(request: Person){
    return this.http.post<Response<Person>>("http://localhost:8080/api/persons",request);
  }
  
  public deletePerson(request: Person){
    return this.http.delete<Response<Person>>(`http://localhost:8080/api/persons/${request.id}`);
  }
  
  public getPersonById(id: number){
    return this.http.get<Response<Person>>(`http://localhost:8080/api/persons/${id}`);
  }
  
  public updatePerson(id: number, request: Person){
    return this.http.put<Response<Person>>(`http://localhost:8080/api/persons/${id}`, request);
  }
}
