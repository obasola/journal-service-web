package com.kumasi.core.demo;

import java.util.List;

public interface ISprocket {
	public void addSprocket(Sprocket s);
	public void removeSprocket(Sprocket s);
	public List<Sprocket> sort();
	public List<Sprocket> sortReverse();
	public Double computeTotalPrice();
}
