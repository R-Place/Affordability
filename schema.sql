DROP DATABASE IF EXISTS affordability;

CREATE DATABASE affordability;

USE affordability;


CREATE TABLE homes (
  id int NOT NULL AUTO_INCREMENT,
  price BIGINT NOT NULL,
  PRIMARY KEY (ID)
);


