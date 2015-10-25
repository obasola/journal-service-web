/*
 * Created on 24 Oct 2015 ( Time 23:20:29 )
 * Generated by Telosys Tools Generator ( version 2.1.1 )
 */
package com.kumasi.journal.business.service.mapping;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Component;
import com.kumasi.journal.domain.Entrytype;
import com.kumasi.journal.domain.jpa.EntrytypeEntity;

/**
 * Mapping between entity beans and display beans.
 */
@Component
public class EntrytypeServiceMapper extends AbstractServiceMapper {

	/**
	 * ModelMapper : bean to bean mapping library.
	 */
	private ModelMapper modelMapper;
	
	/**
	 * Constructor.
	 */
	public EntrytypeServiceMapper() {
		modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
	}

	/**
	 * Mapping from 'EntrytypeEntity' to 'Entrytype'
	 * @param entrytypeEntity
	 */
	public Entrytype mapEntrytypeEntityToEntrytype(EntrytypeEntity entrytypeEntity) {
		if(entrytypeEntity == null) {
			return null;
		}

		//--- Generic mapping 
		Entrytype entrytype = map(entrytypeEntity, Entrytype.class);

		return entrytype;
	}
	
	/**
	 * Mapping from 'Entrytype' to 'EntrytypeEntity'
	 * @param entrytype
	 * @param entrytypeEntity
	 */
	public void mapEntrytypeToEntrytypeEntity(Entrytype entrytype, EntrytypeEntity entrytypeEntity) {
		if(entrytype == null) {
			return;
		}

		//--- Generic mapping 
		map(entrytype, entrytypeEntity);

	}
	
	/**
	 * {@inheritDoc}
	 */
	@Override
	protected ModelMapper getModelMapper() {
		return modelMapper;
	}

	protected void setModelMapper(ModelMapper modelMapper) {
		this.modelMapper = modelMapper;
	}

}