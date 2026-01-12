package com.CloudBalance.Backend.exception;

public class DuplicateResourceException extends RuntimeException{

    public DuplicateResourceException(String s){
        super(s);
    }
}
