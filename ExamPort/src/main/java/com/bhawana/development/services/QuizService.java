package com.bhawana.development.services;

import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import com.bhawana.development.entities.exam.Quiz;

public interface QuizService {

	// add quiz
	public Quiz addQuiz(Quiz quiz);

	// update quiz
	public Quiz updateQuiz(Quiz quiz);

	// get all quizzes
	public Set<Quiz> getQuizzes();

	// get quiz by id
	public Quiz getQuiz(Long quizId);

	// delete quiz by id
	public void deleteQuiz(Long quizId);

}
