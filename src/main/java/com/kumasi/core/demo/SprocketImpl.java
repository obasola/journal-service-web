package com.kumasi.core.demo;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class SprocketImpl implements ISprocket {
	private List<Sprocket> inventory = new ArrayList<Sprocket>();
	
	@Override
	public void addSprocket(Sprocket s) {
		this.inventory.add(s);
	}

	@Override
	public void removeSprocket(Sprocket s) {
		this.inventory.remove(s);

	}

	@Override
	public List<Sprocket> sort() {
		Collections.sort(inventory);
		return inventory;
	}

	@Override
	public List<Sprocket> sortReverse() {
		Collections.sort(inventory, Collections.reverseOrder());
		return inventory;
	}

	@Override
	public Double computeTotalPrice() {
		double totalAmt = 0.0;
		for(Sprocket item : inventory) {
			totalAmt += item.getPrice();
		}
		return new Double(totalAmt);
	}

}
