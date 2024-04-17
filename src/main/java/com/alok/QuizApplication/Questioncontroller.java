package com.alok.QuizApplication;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("questions")
public class Questioncontroller {
    @Autowired
    Questionservice questionservice;// Questionservice questionservice=new Questionservice();

    @Autowired // Go and search for that component and inject it here
    QuestionDao questionDao;// QuestionDao questionDao=new QuestionDao();

    // To Fetch all questions.
    @GetMapping("allquestions")
    public List<Question> getQuestions() {

        return (List<Question>) questionservice.getallquestions();
    }

    // To fetch Questions on category wise.
    @GetMapping("allquestions/category/{category}")
    public List<Question> getByCategory(@PathVariable String category) {
        return (List<Question>) questionDao.findByCategory(category);
    }

    @PostMapping("add")
    public String addQuestion(@RequestBody Question question) {
        questionservice.addQuestion(question);
        return "added successfully";
    }

    @DeleteMapping("delete/{id}")
    public String deleteQuestion(@PathVariable Integer id) {
        questionservice.deleteQuestion(id);
        return "deleted sucessfully";
    }

    @PutMapping("update/{id}")
    public String updateQuestion(@RequestBody Question question, @PathVariable Integer id) {
        questionservice.updateQuestion(question, id);
        return "Updated  successfully";
    }

}
