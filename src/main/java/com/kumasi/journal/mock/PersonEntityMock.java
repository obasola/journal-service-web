
/*
 * Created on 24 Oct 2015 ( Time 23:20:17 )
 * Generated by Telosys Tools Generator ( version 2.1.1 )
 */
package com.kumasi.journal.mock;

import java.util.LinkedList;
import java.util.List;

import com.kumasi.journal.domain.jpa.PersonEntity;
import com.kumasi.journal.mock.tool.MockValues;

public class PersonEntityMock {

	private MockValues mockValues = new MockValues();
	
	/**
	 * Creates an instance with random Primary Key
	 * @return
	 */
	public PersonEntity createInstance() {
		// Primary Key values

		return createInstance( mockValues.nextInteger() );
	}
	
	/**
	 * Creates an instance with a specific Primary Key
	 * @param id1
	 * @return
	 */
	public PersonEntity createInstance( Integer idperson ) {
		PersonEntity entity = new PersonEntity();
		// Init Primary Key fields
		entity.setIdperson( idperson) ;
		// Init Data fields
		entity.setEmailAddress( mockValues.nextString(45) ) ; // java.lang.String 
		entity.setPassword( mockValues.nextString(45) ) ; // java.lang.String 
		entity.setFirstName( mockValues.nextString(45) ) ; // java.lang.String 
		entity.setLastName( mockValues.nextString(45) ) ; // java.lang.String 
		// Init Link fields (if any)
		return entity ;
	}
	
	/**
	 * Creates a list of instances
	 * @param count number of instances to be created
	 * @return
	 */
	public List<PersonEntity> createList(int count) {
		List<PersonEntity> list = new LinkedList<PersonEntity>();		
		for ( int i = 1 ; i <= count ; i++ ) {
			list.add( createInstance() );
		}
		return list;
	}
}