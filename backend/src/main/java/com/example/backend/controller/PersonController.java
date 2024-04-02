package com.example.backend.controller;

import com.example.backend.interfacesservice.IPersonService;
import com.example.backend.model.Person;
import com.example.backend.model.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = { "http://localhost:4200" })
@RestController
@RequestMapping("/api")
public class PersonController {
    @Autowired
    private IPersonService personService;

    @GetMapping("/persons")
    public Response<Person> getAllPersons() {
        return new Response<Person>(true, "Se obtienen todas las personas", personService.findAll());
    }

    @GetMapping("/persons/{id}")
    public Response<Person> getPersonById(@PathVariable Long id) {
        Person person = personService.findById(id);
        if (person != null) {
            return new Response<>(true, "Persona encontrada", new ArrayList<>(Arrays.asList(person)));
        } else {
            return new Response<>(false, "Persona no encontrada", null);
        }
    }

    @PostMapping("/persons")
    @ResponseStatus(HttpStatus.CREATED)
    public Response<Person> createPerson(@RequestBody Person person) {
        Person savedPerson = personService.save(person);
        return new Response<>(true, "Persona creada", new ArrayList<>(Arrays.asList(person)));
    }

    @PutMapping("/persons/{id}")
    public Response<Person> updatePerson(@PathVariable Long id, @RequestBody Person personData) {
        Person person = personService.findById(id);
        if (person != null) {
            person.nombre = personData.nombre;
            person.apellido = personData.apellido;
            person.fechaNacimiento = personData.fechaNacimiento;
            person.puesto = personData.puesto;
            person.sueldo = personData.sueldo;
            Person personUpdate = personService.save(person);
            return new Response<>(true, "Persona actualizada correctamente", new ArrayList<>(Arrays.asList(person)));
        } else {
            return new Response<>(false, "Persona no encontrada", null);
        }
    }

    @DeleteMapping("/persons/{id}")
    public Response<Person> deletePerson(@PathVariable Long id) {
        Person person = personService.findById(id);
        if (person != null) {
            personService.delete(person);
            return new Response<>(true, "Persona eliminada correctamente", null);
        } else {
            return new Response<>(false, "Persona no encontrada", null);
        }
    }

}
