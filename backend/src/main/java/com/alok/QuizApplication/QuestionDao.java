package com.alok.QuizApplication;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionDao extends JpaRepository<Question, Integer> {
    @Query("SELECT q FROM Question q WHERE q.category = :category")
    List<Question> findByCategory(@Param("category") String category);

    @Query(value = "SELECT * FROM Question q Where q.category=:category ORDER BY RANDOM() LIMIT :numq", nativeQuery = true)
    List<Question> findRandomq(String category, int numq);

}
