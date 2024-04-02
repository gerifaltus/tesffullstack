package com.example.backend.service;

import com.example.backend.interfaces.IPerson;
import com.example.backend.interfacesservice.IPersonService;
import com.example.backend.model.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonaService implements IPersonService {

    @Autowired
    private IPerson iPerson;
    @Override
    public List<Person> findAll() {
        return (List<Person>) iPerson.findAll();
    }

    @Override
    public Person save(Person person) {
        return iPerson.save(person);
    }

    @Override
    public Person findById(Long id) {
        return iPerson.findById(id).orElse(null);
    }

    @Override
    public void delete(Person person) {
        iPerson.delete(person);
    }
}
