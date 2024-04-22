
package com.alok.QuizApplication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("Quiz")
public class QuizController {

    @Autowired
    Quizservice quizservice;

    @Autowired
    QuizDao quizDao;

    private boolean isAuth = false;

    @PostMapping("create")
    @CrossOrigin(origins = "http://localhost:3000")
    public String createQuiz(@RequestParam String category, @RequestParam int numq, @RequestParam String title) {
        return quizservice.createQuiz(category, numq, title);
    }

    @GetMapping("get/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<QuestionWrapper> getQuestion(@PathVariable Integer id) {
        return quizservice.getQuizQuestions(id);
    }

    @PostMapping("submit/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Integer submitQuiz(@PathVariable Integer id, @RequestBody List<Response> responses) {
        return quizservice.submitQuiz(id, responses);
    }

}
