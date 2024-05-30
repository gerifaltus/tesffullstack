package com.example.backend.interfacesservice;

import com.example.backend.model.Persona;

import java.util.List;

public interface IPersonaService {
    public List<Persona> findAll();

    public Persona save(Persona person);

    public Persona findById(Long id);

    public void delete(Persona person);
}
