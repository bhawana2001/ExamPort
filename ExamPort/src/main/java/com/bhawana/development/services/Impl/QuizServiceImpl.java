package com.bhawana.development.services.Impl;

import java.util.LinkedHashSet;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bhawana.development.entities.exam.Quiz;
import com.bhawana.development.repository.QuizRepository;
import com.bhawana.development.services.QuizService;

@Service
public class QuizServiceImpl implements QuizService {

	@Autowired
	private QuizRepository quizRepository;

	// add quiz
	@Override
	public Quiz addQuiz(Quiz quiz) {
		return quizRepository.save(quiz);
	}

	// update quiz
	@Override
	public Quiz updateQuiz(Quiz quiz) {
		return quizRepository.save(quiz);
	}

	// get all quizzes
	@Override
	public Set<Quiz> getQuizzes() {
		return new LinkedHashSet<>(quizRepository.findAll());
	}

	// get quiz by id
	@Override
	public Quiz getQuiz(Long quizId) {
		return quizRepository.findById(quizId).get();
	}

	// delete quiz by id
	@Override
	public void deleteQuiz(Long quizId) {

		Quiz quiz = new Quiz();
		quiz.setqId(quizId);

		quizRepository.delete(quiz);

	}

}
