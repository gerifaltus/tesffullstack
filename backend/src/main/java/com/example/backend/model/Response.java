package com.example.backend.model;

import java.util.List;

public class Response<T> {
    public boolean status;
    public String msg;
    public List<T> data;

    public Response(boolean b, String m, List<Person> persons) {
        status = b;
        msg = m;
        data = (List<T>) persons;
    }
}
