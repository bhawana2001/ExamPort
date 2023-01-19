package com.bhawana.development.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bhawana.development.entities.exam.Question;
import com.bhawana.development.entities.exam.Quiz;
import com.bhawana.development.services.QuestionService;
import com.bhawana.development.services.QuizService;

import antlr.collections.List;
import io.jsonwebtoken.lang.Collections;

@RestController
@CrossOrigin("*")
@RequestMapping("/question")
public class QuestionController {

	@Autowired
	private QuestionService questionService;

	@Autowired
	private QuizService quizService;

	// add question
	@PostMapping("/")
	public ResponseEntity<Question> addQuestion(@RequestBody Question question) {
		return ResponseEntity.ok(questionService.addQuestion(question));
	}

	// update question
	@PutMapping("/")
	public ResponseEntity<Question> updateQuestion(@RequestBody Question question) {
		return ResponseEntity.ok(questionService.updateQuestion(question));
	}

	// get all question of any quiz by quiz id
	@GetMapping("/quiz/{quizId}")
	public ResponseEntity<?> getQuestionOfQuiz(@PathVariable("quizId") Long quizId) {

//		Quiz quiz = new Quiz();
//		quiz.setqId(quizId);
//		Set<Question> questionsOfQuiz = questionService.getQuestionsOfQuiz(quiz);
//		return ResponseEntity.ok(questionsOfQuiz);

		Quiz quiz = quizService.getQuiz(quizId);
		Set<Question> questions = quiz.getQuestions();
		ArrayList<?> list = new ArrayList(questions);

		// if list size is greater then number of question we simply return questions we
		// need else if it is smaller then we will return all questions
		if (list.size() > Integer.parseInt(quiz.getNumberOfQuestion())) {
			list = (ArrayList<?>) list.subList(0, Integer.parseInt(quiz.getNumberOfQuestion() + 1));
		}

		java.util.Collections.shuffle(list);
		return ResponseEntity.ok(list);

	}

	// get question single
	@GetMapping("/{quesId}")
	public Question getQuestion(@PathVariable("quesId") Long quesId) {
		return questionService.getQuestion(quesId);
	}

	// delete question by id
	@DeleteMapping("/{quesId}")
	public void deleteQuizById(@PathVariable("quesId") Long quesId) {
		questionService.deleteQuestion(quesId);
	}

}
