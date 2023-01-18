package com.bhawana.development.services;

import java.util.Set;
import com.bhawana.development.entities.exam.Category;

public interface CategoryService {

	// add category
	public Category addCategory(Category category);

	// update category
	public Category updateCategory(Category category);

	// get categories
	public Set<Category> getCategories();

	// get category
	public Category getCategory(Long categoryId);

	// delete category
	public void deleteCategory(Long categoryId);

}
