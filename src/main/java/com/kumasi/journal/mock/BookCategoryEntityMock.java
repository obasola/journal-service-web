
/*
 * Created on 24 Oct 2015 ( Time 23:20:17 )
 * Generated by Telosys Tools Generator ( version 2.1.1 )
 */
package com.kumasi.journal.mock;

import java.util.LinkedList;
import java.util.List;

import com.kumasi.journal.domain.jpa.BookCategoryEntity;
import com.kumasi.journal.mock.tool.MockValues;

public class BookCategoryEntityMock {

	private MockValues mockValues = new MockValues();
	
	/**
	 * Creates an instance with random Primary Key
	 * @return
	 */
	public BookCategoryEntity createInstance() {
		// Primary Key values

		return createInstance( mockValues.nextInteger(), mockValues.nextInteger() );
	}
	
	/**
	 * Creates an instance with a specific Primary Key
	 * @param id1
	 * @return
	 */
	public BookCategoryEntity createInstance( Integer bookId, Integer categoryId ) {
		BookCategoryEntity entity = new BookCategoryEntity();
		// Init Primary Key fields
		entity.setBookId( bookId) ;
		entity.setCategoryId( categoryId) ;
		// Init Data fields
		// Init Link fields (if any)
		return entity ;
	}
	
	/**
	 * Creates a list of instances
	 * @param count number of instances to be created
	 * @return
	 */
	public List<BookCategoryEntity> createList(int count) {
		List<BookCategoryEntity> list = new LinkedList<BookCategoryEntity>();		
		for ( int i = 1 ; i <= count ; i++ ) {
			list.add( createInstance() );
		}
		return list;
	}
}