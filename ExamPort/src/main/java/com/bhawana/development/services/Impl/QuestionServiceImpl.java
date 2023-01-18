package com.bhawana.development.services.Impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bhawana.development.entities.exam.Question;
import com.bhawana.development.entities.exam.Quiz;
import com.bhawana.development.repository.QuestionRepository;
import com.bhawana.development.services.QuestionService;

@Service
public class QuestionServiceImpl implements QuestionService {

	@Autowired
	private QuestionRepository questionRepository;

	// add question
	@Override
	public Question addQuestion(Question question) {
		return questionRepository.save(question);
	}

	// update question
	@Override
	public Question updateQuestion(Question question) {
		return questionRepository.save(question);
	}

	// get questions
	@Override
	public Set<Question> getQuestions() {
		return new LinkedHashSet<>(questionRepository.findAll());
	}

	// get question by id
	@Override
	public Question getQuestion(Long questionId) {
		return questionRepository.findById(questionId).get();
	}

	// delete question
	@Override
	public void deleteQuestion(Long questionId) {
		Question question = new Question();
		question.setQuesId(questionId);
		questionRepository.delete(question);
	}

	@Override
	public Set<Question> getQuestionsOfQuiz(Quiz quiz) {
		return questionRepository.findByQuiz(quiz);
	}

}
