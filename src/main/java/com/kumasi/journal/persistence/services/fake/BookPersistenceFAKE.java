/*
 * Created on 24 Oct 2015 ( Time 23:20:17 )
 * Generated by Telosys Tools Generator ( version 2.1.1 )
 */
package com.kumasi.journal.persistence.services.fake;

import java.util.List;
import java.util.Map;

import com.kumasi.journal.domain.jpa.BookEntity;
import com.kumasi.journal.persistence.commons.fake.GenericFakeService;
import com.kumasi.journal.persistence.services.BookPersistence;

/**
 * Fake persistence service implementation ( entity "Book" )
 *
 * @author Telosys Tools Generator
 */
public class BookPersistenceFAKE extends GenericFakeService<BookEntity> implements BookPersistence {

	public BookPersistenceFAKE () {
		super(BookEntity.class);
	}
	
	protected BookEntity buildEntity(int index) {
		BookEntity entity = new BookEntity();
		// Init fields with mock values
		entity.setId( nextInteger() ) ;
		entity.setIsbn( nextString() ) ;
		entity.setTitle( nextString() ) ;
		entity.setSubtitle( nextString() ) ;
		entity.setAbstractDescription( nextString() ) ;
		entity.setNumberPages( nextInteger() ) ;
		entity.setAuthor( nextString() ) ;
		return entity ;
	}
	
	
	public boolean delete(BookEntity entity) {
		log("delete ( BookEntity : " + entity + ")" ) ;
		return true;
	}

	public boolean delete( Integer id ) {
		log("delete ( PK )") ;
		return true;
	}

	public void insert(BookEntity entity) {
		log("insert ( BookEntity : " + entity + ")" ) ;
	}

	public BookEntity load( Integer id ) {
		log("load ( PK )") ;
		return buildEntity(1) ; 
	}

	public List<BookEntity> loadAll() {
		log("loadAll()") ;
		return buildList(40) ;
	}

	public List<BookEntity> loadByNamedQuery(String queryName) {
		log("loadByNamedQuery ( '" + queryName + "' )") ;
		return buildList(20) ;
	}

	public List<BookEntity> loadByNamedQuery(String queryName, Map<String, Object> queryParameters) {
		log("loadByNamedQuery ( '" + queryName + "', parameters )") ;
		return buildList(10) ;
	}

	public BookEntity save(BookEntity entity) {
		log("insert ( BookEntity : " + entity + ")" ) ;
		return entity;
	}

	public List<BookEntity> search(Map<String, Object> criteria) {
		log("search (criteria)" ) ;
		return buildList(15) ;
	}

	@Override
	public long countAll() {
		return 0 ;
	}

}