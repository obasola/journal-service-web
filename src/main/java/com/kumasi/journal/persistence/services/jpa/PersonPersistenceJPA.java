/*
 * Created on 24 Oct 2015 ( Time 23:20:17 )
 * Generated by Telosys Tools Generator ( version 2.1.1 )
 */

package com.kumasi.journal.persistence.services.jpa;


import javax.persistence.EntityManager;
import javax.persistence.PersistenceException;
import javax.persistence.Query;

import com.kumasi.journal.domain.jpa.PersonEntity;
import com.kumasi.journal.persistence.commons.jpa.GenericJpaService;
import com.kumasi.journal.persistence.commons.jpa.JpaOperation;
import com.kumasi.journal.persistence.services.PersonPersistence;

/**
 * JPA implementation for basic persistence operations ( entity "Person" )
 * 
 * @author Telosys Tools Generator
 *
 */
public class PersonPersistenceJPA extends GenericJpaService<PersonEntity, Integer> implements PersonPersistence {

	/**
	 * Constructor
	 */
	public PersonPersistenceJPA() {
		super(PersonEntity.class);
	}

	@Override
	public PersonEntity load( Integer idperson ) {
		return super.load( idperson );
	}

	@Override
	public boolean delete( Integer idperson ) {
		return super.delete( idperson );
	}

	@Override
	public boolean delete(PersonEntity entity) {
		if ( entity != null ) {
			return super.delete( entity.getIdperson() );
		}
		return false ;
	}

	@Override
	public long countAll() {
		// JPA operation definition 
		JpaOperation operation = new JpaOperation() {
			@Override
			public Object exectue(EntityManager em) throws PersistenceException {
				Query query = em.createNamedQuery("PersonEntity.countAll");
				return query.getSingleResult() ;
			}
		} ;
		// JPA operation execution 
		return (Long) execute(operation);
	}

}