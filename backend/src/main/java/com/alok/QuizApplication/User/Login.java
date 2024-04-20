package com.alok.QuizApplication.User;

import org.springframework.stereotype.Component;

import jakarta.persistence.Table;

@Component
@Table(name = "login")
public class Login {
    private String email;
    private String password;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
