package com.example.backend.interfacesservice;

import com.example.backend.model.Person;

import java.util.List;

public interface IPersonService {
    public List<Person> findAll();

    public Person save(Person person);

    public Person findById(Long id);

    public void delete(Person person);
}
