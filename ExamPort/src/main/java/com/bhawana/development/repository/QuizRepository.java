package com.bhawana.development.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bhawana.development.entities.exam.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Long> {

}
