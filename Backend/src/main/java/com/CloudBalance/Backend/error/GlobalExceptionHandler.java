package com.CloudBalance.Backend.error;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UsernameNotFoundException.class)
    public ResponseEntity<ApiError> handlerUserNameNotFound(UsernameNotFoundException ex) {
        ApiError apiError  = new ApiError("Username is not found with username : " + ex.getLocalizedMessage() , HttpStatus.NOT_FOUND );
        return new ResponseEntity<>(apiError, apiError.getStatusCode());
    }
}
