package com.bhawana.development.services.Impl;

import java.util.LinkedHashSet;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bhawana.development.entities.exam.Category;
import com.bhawana.development.repository.CategoryRepository;
import com.bhawana.development.services.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;

	// add category
	@Override
	public Category addCategory(Category category) {
		return categoryRepository.save(category);
	}

	// update category
	@Override
	public Category updateCategory(Category category) {
		return categoryRepository.save(category);
	}

	// get all categories
	@Override
	public Set<Category> getCategories() {
		return new LinkedHashSet<>(categoryRepository.findAll());
	}

	// get category by id
	@Override
	public Category getCategory(Long categoryId) {
		return categoryRepository.findById(categoryId).get();
	}

	// delete category
	@Override
	public void deleteCategory(Long categoryId) {

		Category category = new Category();
		category.setCid(categoryId);
		categoryRepository.delete(category);
	}

}
