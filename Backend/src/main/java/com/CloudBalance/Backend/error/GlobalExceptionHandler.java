package com.CloudBalance.Backend.error;

import com.CloudBalance.Backend.exception.DuplicateResourceException;
import com.CloudBalance.Backend.exception.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.stream.Collectors;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiError> handleNotFound(ResourceNotFoundException ex) {
        ApiError apiError = new ApiError(ex.getMessage(), HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(apiError,apiError.getStatusCode());
    }

    @ExceptionHandler(DuplicateResourceException.class)
    public ResponseEntity<ApiError> handleConflict(DuplicateResourceException ex) {
        ApiError apiError = new ApiError(ex.getMessage(), HttpStatus.CONFLICT);
        return new ResponseEntity<>(apiError,apiError.getStatusCode());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiError> handleValidationErrors(MethodArgumentNotValidException ex) {
        String errorMessage = ex.getBindingResult().getFieldErrors().stream().map(err -> err.getField() + ": " + err.getDefaultMessage()).collect(Collectors.joining(", "));
        ApiError apiError = new ApiError(errorMessage, HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(apiError,apiError.getStatusCode());
    }

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<ApiError> handleAuthentication(AuthenticationException ex) {
        ApiError apiError = new ApiError("Invalid email or password", HttpStatus.UNAUTHORIZED);
        return new ResponseEntity<>(apiError,apiError.getStatusCode());
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ApiError> handleAccessDenied(AccessDeniedException ex) {
        ApiError apiError = new ApiError("You do not have permission to perform this action", HttpStatus.FORBIDDEN);
        return new ResponseEntity<>(apiError,apiError.getStatusCode());
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<ApiError> handleInvalidJson(HttpMessageNotReadableException ex) {
        ApiError apiError = new ApiError("Invalid request payload", HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(apiError,apiError.getStatusCode());
    }

    @ExceptionHandler(io.jsonwebtoken.JwtException.class)
    public ResponseEntity<ApiError> handleJwtException(io.jsonwebtoken.JwtException ex) {
        ApiError apiError = new ApiError("Session expired. Please log in again.", HttpStatus.UNAUTHORIZED);
        return new ResponseEntity<>(apiError, apiError.getStatusCode());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiError> handleGeneric(Exception ex) {
        ApiError apiError = new ApiError("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        return new ResponseEntity<>(apiError,apiError.getStatusCode());
    }
}
