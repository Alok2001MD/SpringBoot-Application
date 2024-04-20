package com.alok.QuizApplication.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controllerapp {
    boolean isAuth = false;
    @Autowired
    private UserRepo userRepository;

    @PostMapping(path = "/Register")
    public @ResponseBody Register addNewUser(@RequestBody Register register) {
        userRepository.save(register);

        return register;

    }

    @PostMapping(path = "/Login")
    public String login(@RequestBody Login login) {
        Register user = userRepository.findByEmailAndPassword(login.getEmail(), login.getPassword());

        if (user != null && user.getPassword().equals(login.getPassword()) && !isAuth) {
            isAuth = true;
            return "Login successful!";
        } else {
            if (isAuth) {
                isAuth = false;
                return "Already logged in ";
            }
            return "Invalid email or password ";
        }
    }
}
