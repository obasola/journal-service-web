/*
 * Created on 24 Oct 2015 ( Time 23:20:18 )
 * Generated by Telosys Tools Generator ( version 2.1.1 )
 */
package com.kumasi.journal.persistence.services.fake;

import java.util.List;
import java.util.Map;

import com.kumasi.journal.domain.jpa.PersonEntity;
import com.kumasi.journal.persistence.commons.fake.GenericFakeService;
import com.kumasi.journal.persistence.services.PersonPersistence;

/**
 * Fake persistence service implementation ( entity "Person" )
 *
 * @author Telosys Tools Generator
 */
public class PersonPersistenceFAKE extends GenericFakeService<PersonEntity> implements PersonPersistence {

	public PersonPersistenceFAKE () {
		super(PersonEntity.class);
	}
	
	protected PersonEntity buildEntity(int index) {
		PersonEntity entity = new PersonEntity();
		// Init fields with mock values
		entity.setIdperson( nextInteger() ) ;
		entity.setEmailAddress( nextString() ) ;
		entity.setPassword( nextString() ) ;
		entity.setFirstName( nextString() ) ;
		entity.setLastName( nextString() ) ;
		return entity ;
	}
	
	
	public boolean delete(PersonEntity entity) {
		log("delete ( PersonEntity : " + entity + ")" ) ;
		return true;
	}

	public boolean delete( Integer idperson ) {
		log("delete ( PK )") ;
		return true;
	}

	public void insert(PersonEntity entity) {
		log("insert ( PersonEntity : " + entity + ")" ) ;
	}

	public PersonEntity load( Integer idperson ) {
		log("load ( PK )") ;
		return buildEntity(1) ; 
	}

	public List<PersonEntity> loadAll() {
		log("loadAll()") ;
		return buildList(40) ;
	}

	public List<PersonEntity> loadByNamedQuery(String queryName) {
		log("loadByNamedQuery ( '" + queryName + "' )") ;
		return buildList(20) ;
	}

	public List<PersonEntity> loadByNamedQuery(String queryName, Map<String, Object> queryParameters) {
		log("loadByNamedQuery ( '" + queryName + "', parameters )") ;
		return buildList(10) ;
	}

	public PersonEntity save(PersonEntity entity) {
		log("insert ( PersonEntity : " + entity + ")" ) ;
		return entity;
	}

	public List<PersonEntity> search(Map<String, Object> criteria) {
		log("search (criteria)" ) ;
		return buildList(15) ;
	}

	@Override
	public long countAll() {
		return 0 ;
	}

}