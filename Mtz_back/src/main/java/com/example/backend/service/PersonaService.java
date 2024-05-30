package com.example.backend.service;

import com.example.backend.interfaces.IPersona;
import com.example.backend.interfacesservice.IPersonaService;
import com.example.backend.model.Persona;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonaService implements IPersonaService {

    @Autowired
    private IPersona iPersona;
    @Override
    public List<Persona> findAll() {
        return (List<Persona>) iPersona.findAll();
    }

    @Override
    public Persona save(Persona persona) {
        return iPersona.save(persona);
    }

    @Override
    public Persona findById(Long id) {
        return iPersona.findById(id).orElse(null);
    }

    @Override
    public void delete(Persona persona) {
        iPersona.delete(persona);
    }
}
