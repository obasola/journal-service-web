/*
 * Created on 24 Oct 2015 ( Time 23:20:29 )
 * Generated by Telosys Tools Generator ( version 2.1.1 )
 */
package com.kumasi.journal.business.service.impl;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import com.kumasi.journal.domain.Publisher;
import com.kumasi.journal.domain.jpa.PublisherEntity;
import java.util.List;
import com.kumasi.journal.business.service.PublisherService;
import com.kumasi.journal.business.service.mapping.PublisherServiceMapper;
import com.kumasi.journal.persistence.PersistenceServiceProvider;
import com.kumasi.journal.persistence.services.PublisherPersistence;
import org.springframework.stereotype.Component;

/**
 * Implementation of PublisherService
 */
@Component
public class PublisherServiceImpl implements PublisherService {

	private PublisherPersistence publisherPersistence;

	@Resource
	private PublisherServiceMapper publisherServiceMapper;
	
	public PublisherServiceImpl() {
		publisherPersistence = PersistenceServiceProvider.getService(PublisherPersistence.class);
	}
		
	@Override
	public Publisher findById(Integer id) {
		PublisherEntity entity = publisherPersistence.load(id);
		return publisherServiceMapper.mapPublisherEntityToPublisher(entity);
	}

	@Override
	public List<Publisher> findAll() {
		List<PublisherEntity> entities = publisherPersistence.loadAll();
		List<Publisher> beans = new ArrayList<Publisher>();
		for(PublisherEntity entity : entities) {
			beans.add(publisherServiceMapper.mapPublisherEntityToPublisher(entity));
		}
		return beans;
	}

	@Override
	public Publisher save(Publisher publisher) {
		return update(publisher) ;
	}

	@Override
	public Publisher create(Publisher publisher) {
		if(publisherPersistence.load(publisher.getId()) != null) {
			throw new IllegalStateException("already.exists");
		}
		PublisherEntity publisherEntity = new PublisherEntity();
		publisherServiceMapper.mapPublisherToPublisherEntity(publisher, publisherEntity);
		PublisherEntity publisherEntitySaved = publisherPersistence.save(publisherEntity);
		return publisherServiceMapper.mapPublisherEntityToPublisher(publisherEntitySaved);
	}

	@Override
	public Publisher update(Publisher publisher) {
		PublisherEntity publisherEntity = publisherPersistence.load(publisher.getId());
		publisherServiceMapper.mapPublisherToPublisherEntity(publisher, publisherEntity);
		PublisherEntity publisherEntitySaved = publisherPersistence.save(publisherEntity);
		return publisherServiceMapper.mapPublisherEntityToPublisher(publisherEntitySaved);
	}

	@Override
	public void delete(Integer id) {
		publisherPersistence.delete(id);
	}

	public PublisherPersistence getPublisherPersistence() {
		return publisherPersistence;
	}

	public void setPublisherPersistence(PublisherPersistence publisherPersistence) {
		this.publisherPersistence = publisherPersistence;
	}

	public PublisherServiceMapper getPublisherServiceMapper() {
		return publisherServiceMapper;
	}

	public void setPublisherServiceMapper(PublisherServiceMapper publisherServiceMapper) {
		this.publisherServiceMapper = publisherServiceMapper;
	}

}
