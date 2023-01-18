package com.bhawana.development.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bhawana.development.entities.exam.Question;
import com.bhawana.development.entities.exam.Quiz;

public interface QuestionRepository extends JpaRepository<Question, Long> {

	Set<Question> findByQuiz(Quiz quiz);

}
