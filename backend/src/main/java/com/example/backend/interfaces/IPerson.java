package com.example.backend.interfaces;

import com.example.backend.model.Person;
import org.springframework.data.repository.CrudRepository;

public interface IPerson extends CrudRepository<Person, Long> {
}
