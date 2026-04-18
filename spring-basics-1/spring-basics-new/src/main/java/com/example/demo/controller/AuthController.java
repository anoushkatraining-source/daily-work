package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;

public class AuthController {
@Autowired
AuthenticationManager authenticationManager;
@Autowired
PasswordEncoder passwordEncoder;

}
