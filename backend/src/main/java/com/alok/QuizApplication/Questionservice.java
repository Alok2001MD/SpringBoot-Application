package com.alok.QuizApplication;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Questionservice {
    @Autowired
    QuestionDao questionDao;

    public List<Question> getallquestions() {
        return questionDao.findAll();// get all questions present in database

    }

    public String addQuestion(Question question) {
        questionDao.save(question);
        return "Question added successfully";

    }

    public String deleteQuestion(Integer id) {
        questionDao.deleteById(id);
        return "Deleted successfully";

    }

    public String updateQuestion(Question question, Integer id) {
        Optional<Question> optionalQuestion = questionDao.findById(id);
        if (optionalQuestion.isPresent()) {
            questionDao.save(question);
        } else {
            return "not found";
        }
        return "Updated successfully";

    }
}
