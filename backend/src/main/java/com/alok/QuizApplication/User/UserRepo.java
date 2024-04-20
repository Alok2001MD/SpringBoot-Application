package com.alok.QuizApplication.User;

import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

@Repository

public interface UserRepo extends CrudRepository<Register, Integer> {

    Register findByEmailAndPassword(String email, String password);

}
