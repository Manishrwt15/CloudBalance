package com.CloudBalance.Backend.security;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Component
public class AuthUtil {

    @Value("${app.jwt-secret}")
    private String jwtSecretKey;

    @Value("${app.jwt-token-expiry}")
    private Long jwtTokenExpiry;


    private SecretKey getSecretKey(){
        return Keys.hmacShaKeyFor(jwtSecretKey.getBytes(StandardCharsets.UTF_8));
    }


    public String generateAccessToken(String email, String role){
        Date currentDate = new Date();
        Date expireDate = new Date(currentDate.getTime() + jwtTokenExpiry);

        return Jwts.builder()
                .subject(email)
                .claim("role", role)
                .issuedAt(new Date())
                .expiration(expireDate)
                .signWith(getSecretKey())
                .compact();
    }

    public String getUsernameFromToken(String token){
        Claims claim =  Jwts.parser()
                .verifyWith(getSecretKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();

        return  claim.getSubject();
    }

}
