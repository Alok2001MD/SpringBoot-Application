package com.alok.QuizApplication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("Quiz")
public class QuizController {

    @Autowired
    Quizservice quizservice;

    @PostMapping("create")
    public String createQuiz(@RequestParam String category, @RequestParam int numq, @RequestParam String title) {

        return quizservice.createQuiz(category, numq, title);
    }

    @GetMapping("get/{id}")
    public List<Question> getQuestion(@PathVariable Integer id) {
        return quizservice.getQuestion(id);

    }

}
