### Schema

CREATE DATABASE tacotime_db;
USE tacotime_db;

CREATE TABLE tacos
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);
