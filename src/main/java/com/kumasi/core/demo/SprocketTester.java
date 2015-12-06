package com.kumasi.core.demo;

import java.util.List;

import org.jboss.logging.Logger;

public class SprocketTester {
	private static Logger logger = Logger.getLogger("SprocketTester");
	
	public static void main(String[] args) {
		SprocketImpl worker = new SprocketImpl();
		for(int a=0; a < 5; a++) {
			loadInventoryList(worker,"sprocket_"+a,"widget_"+a, 5.00 * a);
		}
		float price = new Float(12.50);
		Sprocket s = new Sprocket("widget","acme special",price);
		worker.addSprocket(s);
		
		printInventoryList(worker);
		worker.removeSprocket(s);
		
		printInReverseInventoryList(worker);
	}
	private static void loadInventoryList(SprocketImpl sproc, String name, String desc, double price) {
		Float f = new Float(price);
		Sprocket s = new Sprocket(name,desc,f);
		sproc.addSprocket(s);
	}
	private static void printInventoryList(SprocketImpl worker) {
		List<Sprocket> inventory = worker.sort();
		logger.info("==============================");
		for(Sprocket item : inventory){
			logger.info(item);
		}
	}
	private static void printInReverseInventoryList(SprocketImpl worker) {
		List<Sprocket> inventory = worker.sortReverse();
		logger.info("==============================");
		for(Sprocket item : inventory){
			logger.info(item);
		}
	}
}
