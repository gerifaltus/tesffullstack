package com.example.backend.controller;

import com.example.backend.interfacesservice.IPersonaService;
import com.example.backend.model.Persona;
import com.example.backend.model.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@CrossOrigin(origins = { "http://localhost:8181" })
@RestController
@RequestMapping("/api")
public class PersonaController {
    @Autowired
    private IPersonaService personaService;

    @GetMapping("/personas")
    public Response<Persona> getAllPersonas() {
        return new Response<Persona>(true, "Se obtienen todas las personas", personaService.findAll());
    }

    @GetMapping("/personas/{id}")
    public Response<Persona> getPersonaById(@PathVariable Long id) {
        Persona persona = personaService.findById(id);
        if (persona != null) {
            return new Response<>(true, "Persona", new ArrayList<>(Arrays.asList(persona)));
        } else {
            return new Response<>(false, "No existe", null);
        }
    }

    @PostMapping("/personas")
    @ResponseStatus(HttpStatus.CREATED)
    public Response<Persona> createPersona(@RequestBody Persona persona) {
        @SuppressWarnings("unused")
        Persona savedPersona = personaService.save(persona);
        return new Response<>(true, "Persona reistrada correctamente", new ArrayList<>(Arrays.asList(persona)));
    }

    @SuppressWarnings("unused")
    @PutMapping("/personas/update/{id}")
    public Response<Persona> updatePersona(@PathVariable Long id, @RequestBody Persona personaData) {
        Persona persona = personaService.findById(id);
        if (persona != null) {
            persona.nombre = personaData.nombre;
            persona.apellido = personaData.apellido;
            persona.fechaNacimiento = personaData.fechaNacimiento;
            persona.puesto = personaData.puesto;
            persona.sueldo = personaData.sueldo;
            Persona personaUpdate = personaService.save(persona);
            return new Response<>(true, "Datos actualizadados correctamente", new ArrayList<>(Arrays.asList(persona)));
        } else {
            return new Response<>(false, "Persona no registrada", null);
        }
    }

    @DeleteMapping("/personas/delete/{id}")
    public Response<Persona> deletePerson(@PathVariable Long id) {
        Persona person = personaService.findById(id);
        if (person != null) {
            personaService.delete(person);
            return new Response<>(true, "Registro de persona eliminada correctamente", null);
        } else {
            return new Response<>(false, "Persona No existe", null);
        }
    }

}
