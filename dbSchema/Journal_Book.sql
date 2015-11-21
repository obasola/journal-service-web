CREATE DATABASE  IF NOT EXISTS `Journal` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `Journal`;
-- MySQL dump 10.13  Distrib 5.5.44, for debian-linux-gnu (x86_64)
--
-- Host: 127.0.0.1    Database: Journal
-- ------------------------------------------------------
-- Server version	5.5.44-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Book`
--

DROP TABLE IF EXISTS `Book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `isbn` varchar(20) NOT NULL,
  `title` varchar(75) NOT NULL,
  `subtitle` varchar(250) DEFAULT NULL,
  `abstract_description` longtext,
  `number_pages` int(11) DEFAULT NULL,
  `author` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Book`
--

LOCK TABLES `Book` WRITE;
/*!40000 ALTER TABLE `Book` DISABLE KEYS */;
INSERT INTO `Book` VALUES (1,'9781118832073','Professional AngularJS','A comprehensive guide to AngularJS, Google\'s open-source client-side framework for app development.','Most of the existing guides to AngularJS struggle to provide simple and understandable explanations for more advanced concepts. As a result, some developers who understand all the basic concepts of AngularJS struggle when it comes to building more complex real-world applications. Professional AngularJS provides a thorough understanding of AngularJS, covering everything from basic concepts, such as directives and data binding, to more advanced concepts like transclusion, build systems, and automated integration testing. In addition to explaining the features of AngularJS, this book distills real-world experience on how these features fit together to enable teams to work together more effectively in building extraordinary apps.\n\nOffers a more thorough and comprehensive approach to AngularJS \nIncludes pointers to other advanced topics\nLets you build a simple application from scratch, explaining basic building blocks along the way for quick hands-on learning',408,'Valeri Karpov'),(2,'9781430264484','Pro AngularJS','Learn to harness the power of modern web browsers from within your application\'s code','AngularJS is the leading framework for building dynamic JavaScript applications that take advantage of the capabilities of modern browsers and devices. AngularJS, which is maintained by Google, brings the power of the Model-View-Controller (MVC) pattern to the client, providing the foundation for complex and rich web apps. It allows you to build applications that are smaller, faster, and with a lighter resource footprint than ever before.\n\nBest-selling author Adam Freeman explains how to get the most from AngularJS. He begins by describing the MVC pattern and the many benefits that can be gained from separating your logic and presentation code. He then shows how you can use AngularJS\'s features within in your projects to produce professional-quality results. Starting from the nuts-and-bolts and building up to the most advanced and sophisticated features AngularJS is carefully unwrapped, going in-depth to give you the knowledge you need.\n\nEach topic is covered clearly and concisely and is packed with the details you need to learn to be truly effective. The most important features are given a no-nonsense in-depth treatment and chapters include common problems and details of how to avoid them.\n\nWhat you’ll learn\n\nGain a solid architectural understanding of the MVC Pattern to separate logic, data and presentation code.\nLearn how to create rich and dynamic web apps using AngularJS\nUnderstand how each feature works and why it is important\nUnderstand how to extend HTML with declarative syntax\nLearn how to extend and customize AngularJS\nLearn how to test, refine, and deploy your AngularJS projects\nWho this book is for\n\nThis book is ideal for web developers who have a working knowledge of JavaScript, HTML and CSS. The book is platform agnostic and a range of browsers will be presented and discussed throughout the examples.\n\nTable of Contents\n\nPart 1 - Getting Started\n1. Getting Ready\n\n2. Your First AngularJS App\n\n3. Putting AngularJS in Context\n\n4. HTML and CSS Primer\n\n5. Javascript Primer\n\n6. SportsStore: A Real Application\n\n7. SportsStore: Navigation and Checkout\n\n8. SportsStore: Administration\n\nPart 2 - Working with AngularJS\n\n9. The Anatomy of an AngularJS App\n\n10. Using Binding and Template Directives\n\n11. Using Element and Event Directives\n\n12. Working with Forms\n\n13. Using Controllers and Scopes\n\n14. Using Filters\n\n15. Creating Custom Directives\n\n16. Creating Complex Directives\n\n17. Advanced Custom Directive Features\n\nPart 3 - AngularJS Modules and Services\n\n18. Working with Modules and Services\n\n19. Services for Global Objects, Errors and Expressions\n\n20. Services for Ajax and Promises\n\n21. Services for REST\n\n22. Services for Views\n\n23. Services for Animation and Touch\n\n24. Services for Provision and Injection\n\n25. Services for Testing\n\nShow Less',688,'Adam Freeman'),(3,'9781771970013','AngularJS','Basic and Advanced techniques, easy to follow','This book introduces AngularJS through a sample project that builds gradually. Learn about the basic concepts that allow you to create effective applications, including modules, scopes, services, and directives. A separate chapter is devoted to connecting to a REST-based web service. In addition, the tools Bower, Grunt, Karma, and Yo are presented, which help in development and can even make certain tasks unnecessary. With Yeoman, the authors outline a workflow that defines how these tools can be employed to create a productive environment for developers. The authors have implemented a large number of projects using AngularJS, and many of the insights from these practical experiences are included in this book in the form of tip boxes. After reading this guide, you will be able to understand how to use each of the modules in AngularJS and how their interaction works; develop modular, structured, and easy-to-maintain client-side web applications; and create quality AngularJS applications through the use of test-driven development methods.',360,'Philipp Tarasiewicz');
/*!40000 ALTER TABLE `Book` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-11-21 12:11:35
