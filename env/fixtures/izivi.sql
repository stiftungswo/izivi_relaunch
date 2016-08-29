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
-- Table structure for table `tbbc_money_doctrine_storage_ratios`
--

DROP TABLE IF EXISTS `tbbc_money_doctrine_storage_ratios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbbc_money_doctrine_storage_ratios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `currency_code` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `ratio` double NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_1168A609FDA273EC` (`currency_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbbc_money_doctrine_storage_ratios`
--

LOCK TABLES `tbbc_money_doctrine_storage_ratios` WRITE;
/*!40000 ALTER TABLE `tbbc_money_doctrine_storage_ratios` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbbc_money_doctrine_storage_ratios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbbc_money_ratio_history`
--

DROP TABLE IF EXISTS `tbbc_money_ratio_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbbc_money_ratio_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `currency_code` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `reference_currency_code` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `ratio` double NOT NULL,
  `saved_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbbc_money_ratio_history`
--

LOCK TABLES `tbbc_money_ratio_history` WRITE;
/*!40000 ALTER TABLE `tbbc_money_ratio_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbbc_money_ratio_history` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `registration_centers`
--

DROP TABLE IF EXISTS `registration_centers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `registration_centers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `registration_centers` WRITE;
INSERT INTO registration_centers VALUES
  (1, 'Regionalzentrum Thun','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (2, 'Regionalzentrum Rueti/ZH','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (3, 'Regionalzentrum Luzern','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (4, 'Centre régional Lausanne','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (5, 'Regionalzentrum Rivera','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (6, 'Regionalzentrum Aarau','2016-07-01 00:00:00','2016-07-01 00:00:00')
;
/*!40000 ALTER TABLE `registration_centers` DISABLE KEYS */;
/*!40000 ALTER TABLE `registration_centers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username_canonical` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email_canonical` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `salt` varchar(255) COLLATE utf8_unicode_ci,
  `hashType` ENUM('MD5', 'BCRYPT') NOT NULL,
  `last_login` datetime DEFAULT NULL,
  `locked` tinyint(1) NOT NULL,
  `expired` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  `confirmation_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password_requested_at` datetime DEFAULT NULL,
  `roles` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  `credentials_expired` tinyint(1) NOT NULL,
  `credentials_expire_at` datetime DEFAULT NULL,
  `firstname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `street` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `postCode` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `birthday` datetime DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `hometown` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `hometownState` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `bankType` ENUM('BANK', 'POST') DEFAULT NULL,
  `accountNumber` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `bankName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `clearingNumber` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `iban` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `insuranceName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `insuranceNumber` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `experience` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `driversLicence` tinyint(1) DEFAULT 0,
  `trainTicket` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `registrationCenter_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `discr` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`registrationCenter_id`) REFERENCES `registration_centers` (`id`) ON DELETE SET NULL,
  UNIQUE KEY `UNIQ_1483A5E992FC23A8` (`username_canonical`),
  UNIQUE KEY `UNIQ_1483A5E9A0D96FBF` (`email_canonical`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
INSERT INTO `users` (id, username, username_canonical, email, email_canonical, enabled, password, hashType, locked, expired, roles, credentials_expired, created_at, updated_at, discr)
VALUES (1,'admin','admin','admin@example.org','admin@example.org',1,'$2a$06$ND7Tv/aHYbS7rGbaeyNc3ea.TS8fpXn58cfzaNmgtjb7o86I2DpoG', 'BCRYPT',0,0,'a:1:{i:0;s:16:\"ROLE_SUPER_ADMIN\";}',0,'2016-07-01 00:00:00','2016-07-01 00:00:00','employee');
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

--
-- Table structure for table `codes`
--

DROP TABLE IF EXISTS `codes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `codes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `type` ENUM('REGISTRATION', 'SERVICE_APPLICATION') NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `codes` WRITE;
/*!40000 ALTER TABLE `codes` DISABLE KEYS */;
/*!40000 ALTER TABLE `codes` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `states` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shortCode` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `states` WRITE;
INSERT INTO states VALUES
  (1, 'AG','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (2, 'AI','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (3, 'AR','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (4, 'BL','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (5, 'BS','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (6, 'BE','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (7, 'FR','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (8, 'GE','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (9, 'GL','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (10, 'GR','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (11, 'JU','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (12, 'LU','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (13, 'NE','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (14, 'NW','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (15, 'OW','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (16, 'SH','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (17, 'SZ','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (18, 'SG','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (19, 'SO','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (20, 'TI','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (21, 'TG','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (22, 'UR','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (23, 'VD','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (24, 'VS','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (25, 'ZG','2016-07-01 00:00:00','2016-07-01 00:00:00'),
  (26, 'ZH','2016-07-01 00:00:00','2016-07-01 00:00:00')
;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;
/*!40000 ALTER TABLE `states` ENABLE KEYS */;
UNLOCK TABLES;
