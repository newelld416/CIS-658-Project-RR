/* Get all users from user table */
select * from `test`.`favorites`;

/* select individual user */
select * from `test`.`favorites` where id = 1;

/* Use to populate user database */
INSERT INTO `test`.`favorites` (`userId`, `restaurantId`) VALUES (1, 1);
INSERT INTO `test`.`favorites` (`userId`, `restaurantId`) VALUES (1, 2);
INSERT INTO `test`.`favorites` (`userId`, `restaurantId`) VALUES (1, 4);
INSERT INTO `test`.`favorites` (`userId`, `restaurantId`) VALUES (2, 5);
INSERT INTO `test`.`favorites` (`userId`, `restaurantId`) VALUES (2, 2);
INSERT INTO `test`.`favorites` (`userId`, `restaurantId`) VALUES (3, 1);
INSERT INTO `test`.`favorites` (`userId`, `restaurantId`) VALUES (3, 4);
INSERT INTO `test`.`favorites` (`userId`, `restaurantId`) VALUES (3, 5);
INSERT INTO `test`.`favorites` (`userId`, `restaurantId`) VALUES (3, 3);
INSERT INTO `test`.`favorites` (`userId`, `restaurantId`) VALUES (4, 3);
INSERT INTO `test`.`favorites` (`userId`, `restaurantId`) VALUES (5, 1);
INSERT INTO `test`.`favorites` (`userId`, `restaurantId`) VALUES (5, 2);
INSERT INTO `test`.`favorites` (`userId`, `restaurantId`) VALUES (5, 5);


/* Delete all users */
DELETE FROM `test`.`favorites` WHERE userId > 0;

/* Delete an existing users favorites */
DELETE FROM `test`.`favorites` WHERE userId = 1;

/* Delete a single users favorite */
DELETE FROM `test`.`favorites` WHERE userId = 1 AND restaurantId = 2;
