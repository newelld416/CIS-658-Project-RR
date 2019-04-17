/* Get all users from user table */
select * from users;

/* select individual user */
select * from users where userId = 1;

/* Use to populate user database */
INSERT INTO `test`.`users` (`userId`, `email`, `firstName`, `lastName`) VALUES (1, 'daniel.newell@amway.com','Daniel', 'Newell');
INSERT INTO `test`.`users` (`userId`, `email`, `firstName`, `lastName`) VALUES (2, 'thomas.norris@amway.com','Thomas', 'Norris');
INSERT INTO `test`.`users` (`userId`, `email`, `firstName`, `lastName`) VALUES (3, 'kelsey.manas@amway.com','Kelsey', 'manas');
INSERT INTO `test`.`users` (`userId`, `email`, `firstName`, `lastName`) VALUES (4, 'frederic.paladin@amway.com','Frederic', 'Paladin');
INSERT INTO `test`.`users` (`userId`, `email`, `firstName`, `lastName`) VALUES (5, 'abby.vanderwagen@amway.com','Abby', 'VanderWagen');

/* Delete all users */
DELETE FROM `test`.`users` WHERE userId > 0;

/* Delete an existing user */
DELETE FROM `test`.`users` WHERE userId = 1;

/* Get max user id */
SELECT MAX(userId) FROM `test`.`users`;
