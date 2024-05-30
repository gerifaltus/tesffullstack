package com.example.backend.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.sql.Date;

@Entity
@Table(name = "persona")
public class Persona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    public String nombre;
    public String apellido;
    @Column(name="fechanacimiento")
    //@Temporal(TemporalType.DATE)
    public Date fechaNacimiento;
    public String puesto;
    public BigDecimal sueldo;

    public void Personas() {
    }

    public void Personas(String nombre, String apellido, Date fechaNacimiento, String puesto, BigDecimal sueldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.puesto = puesto;
        this.sueldo = sueldo;
    }
}
