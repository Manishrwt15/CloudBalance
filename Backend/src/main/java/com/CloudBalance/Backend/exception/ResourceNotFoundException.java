package com.CloudBalance.Backend.exception;

public class ResourceNotFoundException extends RuntimeException{

    public ResourceNotFoundException(String s) {
        super(s);
    }
}