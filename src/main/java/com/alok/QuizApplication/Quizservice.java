package com.alok.QuizApplication;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Quizservice {
    @Autowired
    QuizDao quizDao;
    @Autowired
    QuestionDao questionDao;

    public String createQuiz(String category, int numq, String title) {
        List<Question> questions = questionDao.findRandomq(category, numq);
        Quiz quiz = new Quiz();
        quiz.setTitle(title);
        quiz.setQuestions(questions);
        quizDao.save(quiz);
        return "Quiz created";
    }

    public List<Question> getQuestion(Integer id) {
        Quiz quiz = quizDao.findById(id).get();
        return quiz.getQuestions();

    }

}
