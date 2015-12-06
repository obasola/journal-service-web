package com.kumasi.core.demo;

import java.io.Serializable;
import org.apache.commons.lang3.builder.CompareToBuilder;
public class Sprocket implements Comparable<Sprocket>, Serializable {
	private String name;
	private String desc;
	private Float price;
	
	public Sprocket(String name, String desc, Float price) {
		super();
		this.name = name;
		this.desc = desc;
		this.price = price;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public Float getPrice() {
		return price;
	}

	public void setPrice(Float price) {
		this.price = price;
	}

	@Override
	public int compareTo(Sprocket o) {
		return new CompareToBuilder()
				.append(name, o.name)
				.append(desc, o.desc)
				.append(price, o.price)
				.toComparison();
	}

	@Override
	public String toString() {
		return "Sprocket [name=" + name + ", desc=" + desc + ", price=" + price + "]";
	}
	
	
}
