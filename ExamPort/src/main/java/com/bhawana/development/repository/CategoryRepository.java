package com.bhawana.development.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bhawana.development.entities.exam.Category;

public interface CategoryRepository extends JpaRepository<Category,Long>{

}
