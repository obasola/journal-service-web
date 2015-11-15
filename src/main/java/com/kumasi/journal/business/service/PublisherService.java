/*
 * Created on 24 Oct 2015 ( Time 23:23:57 )
 * Generated by Telosys Tools Generator ( version 2.1.1 )
 */
package com.kumasi.journal.business.service;

import java.util.List;

import com.kumasi.journal.domain.Publisher;

/**
 * Business Service Interface for entity Publisher.
 */
public interface PublisherService { 

	/**
	 * Loads an entity from the database using its Primary Key
	 * @param id
	 * @return entity
	 */
	Publisher findById( Integer id  ) ;

	/**
	 * Loads all entities.
	 * @return all entities
	 */
	List<Publisher> findAll();

	/**
	 * Saves the given entity in the database (create or update)
	 * @param entity
	 * @return entity
	 */
	Publisher save(Publisher entity);

	/**
	 * Updates the given entity in the database
	 * @param entity
	 * @return
	 */
	Publisher update(Publisher entity);

	/**
	 * Creates the given entity in the database
	 * @param entity
	 * @return
	 */
	Publisher create(Publisher entity);

	/**
	 * Deletes an entity using its Primary Key
	 * @param id
	 */
	void delete( Integer id );


}