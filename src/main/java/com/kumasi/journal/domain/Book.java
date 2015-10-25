/*
 * Created on 24 Oct 2015 ( Time 23:23:56 )
 * Generated by Telosys Tools Generator ( version 2.1.1 )
 */
package com.kumasi.journal.domain;

import java.io.Serializable;

import javax.validation.constraints.*;


public class Book implements Serializable {

    private static final long serialVersionUID = 1L;

    //----------------------------------------------------------------------
    // ENTITY PRIMARY KEY ( BASED ON A SINGLE FIELD )
    //----------------------------------------------------------------------
    @NotNull
    private Integer id;

    //----------------------------------------------------------------------
    // ENTITY DATA FIELDS 
    //----------------------------------------------------------------------    
    @NotNull
    @Size( min = 1, max = 20 )
    private String isbn;

    @NotNull
    @Size( min = 1, max = 75 )
    private String title;

    @Size( max = 250 )
    private String subtitle;

    @Size( max = 255 )
    private String abstractDescription;


    private Integer numberPages;

    @Size( max = 45 )
    private String author;



    //----------------------------------------------------------------------
    // GETTER & SETTER FOR THE KEY FIELD
    //----------------------------------------------------------------------
    public void setId( Integer id ) {
        this.id = id ;
    }

    public Integer getId() {
        return this.id;
    }


    //----------------------------------------------------------------------
    // GETTERS & SETTERS FOR FIELDS
    //----------------------------------------------------------------------
    public void setIsbn( String isbn ) {
        this.isbn = isbn;
    }
    public String getIsbn() {
        return this.isbn;
    }

    public void setTitle( String title ) {
        this.title = title;
    }
    public String getTitle() {
        return this.title;
    }

    public void setSubtitle( String subtitle ) {
        this.subtitle = subtitle;
    }
    public String getSubtitle() {
        return this.subtitle;
    }

    public void setAbstractDescription( String abstractDescription ) {
        this.abstractDescription = abstractDescription;
    }
    public String getAbstractDescription() {
        return this.abstractDescription;
    }

    public void setNumberPages( Integer numberPages ) {
        this.numberPages = numberPages;
    }
    public Integer getNumberPages() {
        return this.numberPages;
    }

    public void setAuthor( String author ) {
        this.author = author;
    }
    public String getAuthor() {
        return this.author;
    }


    //----------------------------------------------------------------------
    // toString METHOD
    //----------------------------------------------------------------------
 
        public String toString() { 
        StringBuffer sb = new StringBuffer(); 
        sb.append(id);
        sb.append("|");
        sb.append(isbn);
        sb.append("|");
        sb.append(title);
        sb.append("|");
        sb.append(subtitle);
        sb.append("|");
        sb.append(abstractDescription);
        sb.append("|");
        sb.append(numberPages);
        sb.append("|");
        sb.append(author);
        return sb.toString(); 
    } 


}
