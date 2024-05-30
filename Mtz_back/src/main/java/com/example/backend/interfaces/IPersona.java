package com.example.backend.interfaces;

import com.example.backend.model.Persona;
import org.springframework.data.repository.CrudRepository;

public interface IPersona extends CrudRepository<Persona, Long> {
}
