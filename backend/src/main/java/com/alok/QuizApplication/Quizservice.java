package com.alok.QuizApplication;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

@Service
public class Quizservice {
    @Autowired
    QuizDao quizDao;
    @Autowired
    QuestionDao questionDao;

    @CrossOrigin(origins = "http://localhost:3000")
    public String createQuiz(String category, int numq, String title) {
        List<Question> questions = questionDao.findRandomq(category, numq);
        Quiz quiz = new Quiz();
        quiz.setTitle(title);
        quiz.setQuestions(questions);
        quizDao.save(quiz);
        return "Quiz created";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    public List<QuestionWrapper> getQuizQuestions(Integer id) {
        Optional<Quiz> quiz = quizDao.findById(id);
        List<Question> questionsFromDB = quiz.get().getQuestions();
        List<QuestionWrapper> questionsForUser = new ArrayList<>();
        for (Question q : questionsFromDB) {
            QuestionWrapper qw = new QuestionWrapper(q.getId(), q.getQuestionTitle(), q.getOption1(), q.getOption2(),
                    q.getOption3(), q.getOption4());
            questionsForUser.add(qw);
        }

        return questionsForUser;

    }

    @CrossOrigin(origins = "http://localhost:3000")
    public Integer submitQuiz(Integer id, List<Response> responses) {
        Optional<Quiz> quiz = quizDao.findById(id);
        List<Question> questions = quiz.get().getQuestions();
        int score = 0;
        int i = 0;
        for (Response response : responses) {
            if (response.getResponse().equals(questions.get(i).getRightAnswer())) {
                score++;
            }
            i++;
        }
        return score;

    }
}
