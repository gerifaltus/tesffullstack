package com.example.backend.model;

import java.util.List;

public class Response<T> {
    public boolean status;
    public String msg;
    public List<T> data;

    @SuppressWarnings("unchecked")
    public Response(boolean b, String m, List<Persona> persona) {
        status = b;
        msg = m;
        data = (List<T>) persona;
    }
}
