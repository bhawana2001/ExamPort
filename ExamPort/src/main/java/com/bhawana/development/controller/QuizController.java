package com.bhawana.development.controller;

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

import com.bhawana.development.entities.exam.Quiz;
import com.bhawana.development.services.QuizService;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController {

	@Autowired
	private QuizService quizService;

	// add quiz
	@PostMapping("/")
	public ResponseEntity<Quiz> addQuiz(@RequestBody Quiz quiz) {
		Quiz quiz1 = quizService.addQuiz(quiz);
		return ResponseEntity.ok(quiz1);
	}

	// update quiz
	@PutMapping("/")
	public ResponseEntity<Quiz> update(@RequestBody Quiz quiz) {
		return ResponseEntity.ok(quizService.updateQuiz(quiz));
	}

	// get quiz
	@GetMapping("/")
	public ResponseEntity<?> getQuizzes() {
		return ResponseEntity.ok(quizService.getQuizzes());
	}

	// get quiz by id
	@GetMapping("/{qId}")
	public Quiz getQuiz(@PathVariable("qId") Long qId) {
		return quizService.getQuiz(qId);
	}

	// delete quiz by id
	@DeleteMapping("/{qId}")
	public void deleteQuiz(@PathVariable("qId") Long qId) {
		quizService.deleteQuiz(qId);
	}

}
