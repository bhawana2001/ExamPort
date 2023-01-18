package com.bhawana.development.services;

import java.util.Set;

import com.bhawana.development.entities.exam.Question;
import com.bhawana.development.entities.exam.Quiz;

public interface QuestionService {

	// add question
	public Question addQuestion(Question question);

	// update question
	public Question updateQuestion(Question question);

	// get questions
	public Set<Question> getQuestions();

	// get question by id
	public Question getQuestion(Long questionId);

	// delete question by id
	public void deleteQuestion(Long questionId);

	// list of question from quiz
	public Set<Question> getQuestionsOfQuiz(Quiz quiz);

}
