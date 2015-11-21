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
-- Table structure for table `Entry`
--

DROP TABLE IF EXISTS `Entry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Entry` (
  `idEntry` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `story_definition` longtext NOT NULL,
  `success_factory` mediumtext,
  `date_created` datetime DEFAULT NULL,
  `date_modified` datetime DEFAULT NULL,
  `EntryType_id` int(11) NOT NULL,
  `entry_subtype` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`idEntry`),
  KEY `fk_Entry_EntryType_idx` (`EntryType_id`),
  CONSTRAINT `fk_Entry_EntryType` FOREIGN KEY (`EntryType_id`) REFERENCES `EntryType` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Entry`
--

LOCK TABLES `Entry` WRITE;
/*!40000 ALTER TABLE `Entry` DISABLE KEYS */;
INSERT INTO `Entry` VALUES (1,'Filter and animate table data that uses ng-repeat','As a developer I want to add an animated filter to my list of data displayed by ng-repeat\nSo that End-Users can filter a large list down to just the items they are interested in.\n\nSteps:\n1. Add an inputbox above the list \n <input ng-model=\"searchKey\">\n\n2. Add a filter to the \"ng-repeat\"\n<tr ng-repeat=\"project in list.projects | filter:searchKey\">\n\n3. Now animate the filter\n<tr ng-repeat=\"project in list.projects | filter:searchKey\" ng-animate=\" \'slide\' \">\n\nNote: Ensure that the correct ng-animate css and js files are included in my index.html.','The page allows the End-User to enter dynamic filtering criteria and the list of items displayed is appropriately re-displayed showing only items that fit the criteria.','2015-10-25 11:24:22','2015-11-15 00:56:18',1,'J'),(2,'TLX Admin Fee calculation','Admin Fee added to \"Original Schedule\" section of Loan History page. The admin fee should be reflected in the Payment, and Balance fields. \nPayment = Principle + New Interest + Admin Fee\nBalance  = Transaction Amount - Principle - Admin Fee','1. The new field should appear in the Original Schedule section immediately left of the Balance field\n2. The above calculation should show that the Admin Fee is either added or removed from the Payment and Balance fields respectively.','2015-11-11 07:03:18','2015-11-15 00:56:18',7,'J'),(3,'Form Validation using ngModelOptions and DeBouncing','Controls when the model updates to prevent validation errors showing too early.\nUseful to control when errors are displayed or when the model is rendered.\n\nGiven:\n<form name=\"myForm\" ng-submitted = true; ctrl.submit(form, myForm.$valid)\" novalidate ng-controller=\"FormCtrl as ctrl\">\n<label>First Name</label>\n<input type=\"text\" ng-model=\"form.firstName\" required name=\"firstName\" />\n<div ng-if=\"myForm.firstName.$error.required && submitted\">First Name is a required field</div>\n...\n</form>\n\nChange it to this:\n\n<input type=\"text\" ng-model=\"form.firstName\" required name=\"firstName\"  ng-model-options=\"{updateOn: \'blur\'}\" />\nThis causes error msgs to go away on blur or display if user tabs through a required field w/o entering data','None','2015-11-13 07:22:47','2015-11-15 00:56:18',1,'J'),(4,'Excess $http Requests controlled with Debounce','Given:\n<input type=\"text\" placeholder=\"Search...\" ng-model=\"search.q\" />\n\nWhen creating \"Search\" bars watch out for cases where:\nEach letter the user types causes another database request to trigger (too many requests), and none of the database requests are cancelled.\n\nTo fix such that the request is not made before the User stops typing delay the submit by 500 milliseconds by adding \"ng-model-options\" to the input field:\n<input type=\"text\" placeholder=\"Search...\" ng-model=\"search.q\" ng-model-options=\"{ debounce: {\'default\' : 500, blur : 0}   }\" />','None','2015-11-13 08:20:05','2015-11-15 00:56:18',1,'J'),(5,'Creating Validators in 1.3','(pre 1.3 way) Steps:\n1. Create a directive\n2. require NgModel\n3. Register a $ parser or $formatter\n\nProblem with Parsers and Formatters:\n1. Order is problematic\n2. If one fails then another could fail too...\n\nAngularJS 1.3 introduces the \"$validator\" pipeline to address the above issues:\n1. mgModel.$validators is used to register validation directly\n2. Sync validation is easy\n3. Can also return a \"promise\"\n\nSync Validator Example:\n- Username requirements validator\n- Just return true or false\n\n.directive(\'username-pattern-validator\', function() {\n   return{\n       require : \'^ngModel\',\n       link : function(scope, element, attrs, model) {\n         model.$validators.usernamePattern = function(modelValue, viewValue) {\n             var value = modelValue || viewValue;\n             return /^[-\\w]+$/.test(value);\n         }\n       }\n   }\n});\n\n<input type=\"text\" ng-model=\"data.username\" name=\"username\" username-pattern-validator />','None','2015-11-13 08:34:40','2015-11-15 00:56:18',1,'J'),(6,'Async Validators','When a promise is returned\n$valid and $invalid go to the \"undefined\"\n$pending[prop] is set to true\n\nExample code same as previous validator except for this minor change:\n\nreturn $http.get(\'/api/check-username?u=\'+value);','None','2015-11-13 08:40:23','2015-11-15 00:56:18',1,'J'),(7,'Validator example','An example of a Canadian postalcode validator (Canadian postalcodes contains letters and numbers):\n.directive(\'postalCodeValidator\', function() {\n   return{\n       require : \'^ngModel\',\n       link : function(scope, element, attrs, ctrl) {\n         model.$validators.usernamePattern = function(modelValue, viewValue) {\n             var value = modelValue || viewValue;\n             regexp = /[]\n         }\n       }\n   }\n});','None','2015-11-13 08:46:44','2015-11-15 00:56:18',1,'J'),(8,'Simple Test','Testing notification','it should show success message','2015-11-14 20:24:56','2015-11-15 00:56:18',1,'J'),(9,'A new test','On successful creation show  msg','it should show message after success','2015-11-14 20:30:20','2015-11-15 00:56:18',1,'J'),(10,'A new test','On successful creation show  msg','it should show message after success','2015-11-14 20:30:47','2015-11-15 00:56:18',1,'J'),(11,'A new test','On successful creation show  msg','it should show message after success','2015-11-14 20:32:05','2015-11-15 00:56:18',1,'J'),(12,'More testing','A new test','it should show a message','2015-11-14 20:32:33','2015-11-15 00:56:18',1,'J'),(13,'More testing','A new test','it should show a message','2015-11-14 20:33:54','2015-11-15 00:56:18',1,'J'),(14,'New test','A new test','new','2015-11-14 20:35:00','2015-11-15 00:56:18',1,'J'),(15,'another test','testing growl display and removal','it should remove message in 4 seconds','2015-11-14 20:39:42','2015-11-15 00:56:18',1,'J'),(16,'one more final test','testing growl display and removal','it should ne centered','2015-11-14 20:42:23','2015-11-15 00:56:18',1,'J'),(18,'How to show \"no data\" message when filtered list is enpty','One way is to access the filtered list outside of the ng-repeat and the use ng-show or ng-hide to display the message.',NULL,'2015-11-15 10:36:05','2015-11-15 10:44:19',1,'N'),(19,'Display message when ng-repeat filtered and has no data','Use the filtered list outside of the ng-repeat and use either ng-show or ng-hide to display the message.',NULL,NULL,'2015-11-15 10:44:19',1,'N'),(20,'Final Testing','Testing to confirm that the create function still works',NULL,'2015-11-15 11:36:40',NULL,1,'N'),(21,'How to pass params using UI-Router','1. Modify the anchor tag to use ui-sref\n2. do something similar to:\n<a class=\"btn btn-info\" ui-sref=\"stateVariable({variable: {{scope variable}} }) \" >{{\'edit\' | translate }}</a>\n3. So a complete example is like:\n<a class=\"btn btn-info\" ui-sref=\"editBook({id: {{book.id}} }) \" >{{\'edit\' | translate }}</a>\n4. change the Modeule config like so:\n .state(\'editBook\', {\n            url:\'/book/:id\',\n            params : {id: null,},\n            templateUrl: \'partials/book/book_form.html\',\n            controller: \'BookCtrl\'\n        })\n5. inject $state, and $state,params into the controller\n6. Get the parameter from $state.params.<parmName>\n   $state.params.id',NULL,'2015-11-16 09:50:46',NULL,1,'N'),(22,'Form Validation messaging','An example of validation messaging is:\n<form name=\"frm\">\n<label>User ID</labe>\n<input type=\"text\" name=\"userId\" ng-model=\"user.id\" required ng-minlengh=\"4\" ng-maxlength=\"10\"/>\n\n<span ng-show=\"frm.userId.$dirty && frm.userId.$error.required\" />UserID is a required field</span>\n<span ng-show=\"frm.userId.$dirty && frm.userId.$error.minlength\" />too short</span>\n<span ng-show=\"frm.userId.$dirty && frm.userId.$error.maxlength\" />too long</span>\n\n</form>',NULL,'2015-11-16 12:27:22',NULL,1,'N'),(23,'Unable to autowire bean utilityConfig','TMX esign-service-web fails to start due to jdbc connection issue.\n\nResolution:',NULL,'2015-11-20 07:58:33',NULL,1,'N'),(24,'Shaping up with Angular -','1. Directive \n       A market on an HTML tag that tells Angular to run or reference some JavaScript code:\n          (e.g., <body ng-controller=\"StoreController\"> ... </body> ) Its how we bind the behaviour.\n\n2. Module \n       A .js file where we write pieces of Angular application code. \n       Modules can make our code more maintainable, testable, and readable. \n       Modules can have dependencies on other modules\n    var app  = angular.module(\'Store\', []);  //Note: \'Store\' = app name, [] = where dependencies are defined\n\n3. Expressions \n       Angularjs code enclosed in curly braces \"{{}}\" that are resolved at runtime\n                     <p>I am {{4 + 6}} years old</p> \n\n4. Controllers\n       Are where define out app\'s behaviour. Good practice is to wrap your code inside a closure:\n    (function() {\n      ...\n    }) ();\n\n   (function() {\n         var app = angular.module(\'store\',[]);\n\n          app.controller(\'StoreController\', function() {\n                this.product = gem;\n           });   \n           var gem = {\n                        name: \'Dodecahedron\',\n                        price : 2.95,\n                        description : \'Outstanding value for the money\',\n                } \n        }) ();\n\n5.',NULL,'2015-11-21 09:11:20',NULL,1,'N');
/*!40000 ALTER TABLE `Entry` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `Entry_BINS` BEFORE INSERT ON `Entry` FOR EACH ROW
set new.date_created = now() */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `Entry_BUPD` BEFORE UPDATE ON `Entry` FOR EACH ROW
set new.date_modified = now() */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-11-21 12:11:35
