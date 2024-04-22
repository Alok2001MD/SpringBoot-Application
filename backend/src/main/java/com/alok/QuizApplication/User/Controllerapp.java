package com.alok.QuizApplication.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Controllerapp {
    boolean isAuth = false;
    @Autowired
    private UserRepo userRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/Register")
    public ResponseEntity<String> addNewUser(@RequestBody Register register) {
        userRepository.save(register);
        return ResponseEntity.ok().body("User registration successful");

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/Login")
    public String login(@RequestBody Login login) {
        Register user = userRepository.findByEmailAndPassword(login.getEmail(), login.getPassword());

        if (user != null && user.getPassword().equals(login.getPassword())) {
            isAuth = true;
            return "Login successful!";
        }
        return "Invalid email or password ";
    }
}
