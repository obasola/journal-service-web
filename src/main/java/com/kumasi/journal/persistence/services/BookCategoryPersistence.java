/*
 * Created on 24 Oct 2015 ( Time 23:20:17 )
 * Generated by Telosys Tools Generator ( version 2.1.1 )
 */
package com.kumasi.journal.persistence.services;

import java.util.List;
import java.util.Map;

import com.kumasi.journal.domain.jpa.BookCategoryEntity;

/**
 * Basic persistence operations for entity "BookCategory"
 * 
 * This Bean has a composite Primary Key : BookCategoryEntityKey
 *
 * @author Telosys Tools Generator
 *
 */
public interface BookCategoryPersistence {

	/**
	 * Deletes the given entity <br>
	 * Transactional operation ( begin transaction and commit )
	 * @param bookCategory
	 * @return true if found and deleted, false if not found
	 */
	public boolean delete(BookCategoryEntity bookCategory) ;

	/**
	 * Deletes the entity by its Primary Key <br>
	 * Transactional operation ( begin transaction and commit )
	 * @param bookId
	 * @param categoryId
	 * @return true if found and deleted, false if not found
	 */
	public boolean delete(Integer bookId, Integer categoryId) ;

	/**
	 * Inserts the given entity and commit <br>
	 * Transactional operation ( begin transaction and commit )
	 * @param bookCategory
	 */
	public void insert(BookCategoryEntity bookCategory) ;

	/**
	 * Loads the entity for the given Primary Key <br>
	 * @param bookId
	 * @param categoryId
	 * @return the entity loaded (or null if not found)
	 */
	public BookCategoryEntity load(Integer bookId, Integer categoryId) ;

	/**
	 * Loads ALL the entities (use with caution)
	 * @return
	 */
	public List<BookCategoryEntity> loadAll() ;

	/**
	 * Loads a list of entities using the given "named query" without parameter 
	 * @param queryName
	 * @return
	 */
	public List<BookCategoryEntity> loadByNamedQuery(String queryName) ;

	/**
	 * Loads a list of entities using the given "named query" with parameters 
	 * @param queryName
	 * @param queryParameters
	 * @return
	 */
	public List<BookCategoryEntity> loadByNamedQuery(String queryName, Map<String, Object> queryParameters) ;

	/**
	 * Saves (create or update) the given entity <br>
	 * Transactional operation ( begin transaction and commit )
	 * @param bookCategory
	 * @return
	 */
	public BookCategoryEntity save(BookCategoryEntity bookCategory) ;

	/**
	 * Search the entities matching the given search criteria
	 * @param criteria
	 * @return
	 */
	public List<BookCategoryEntity> search( Map<String, Object> criteria ) ;

	/**
	 * Count all the occurrences
	 * @return
	 */
	public long countAll();
	
}