/* Get all users from user table */
select * from `test`.`restaurants`;

/* select individual user */
select * from `test`.`restaurants` where id = 1;

/* Select rstaurants favorited by a user */
SELECT * FROM `test`.`restaurants` INNER JOIN `test`.`restaurants` ON `test`.`restaurants`.`restaurantId` = `test`.`restaurants`.`id`;

/* Use to populate user database */
INSERT INTO `test`.`restaurants` (`id`, `name`, `address`, `phone`, `description`) VALUES (1, 'Mcdonalds','415 28th St SE, Grand Rapids, MI 49548', '(616) 248-3666', 'This is a McDonalds');
INSERT INTO `test`.`restaurants` (`id`, `name`, `address`, `phone`, `description`) VALUES (2, 'Burger King','600 28th St SE, Grand Rapids, MI 49548', '(616) 475-5812', 'This is a Burger King');
INSERT INTO `test`.`restaurants` (`id`, `name`, `address`, `phone`, `description`) VALUES (3, 'Wendys','1600 28th St SW, Wyoming, MI 49519', '(616) 249-3133', 'This is a Wendys');
INSERT INTO `test`.`restaurants` (`id`, `name`, `address`, `phone`, `description`) VALUES (4, 'Arbys','620 44th St SE, Kentwood, MI 49508', '(616) 530-0030', 'This is a Arbys');
INSERT INTO `test`.`restaurants` (`id`, `name`, `address`, `phone`, `description`) VALUES (5, 'Panera','99 Monroe Ave NW, Grand Rapids, MI 49503', '(616) 451-4007', 'This is a Panera');

/* Delete all restaurants */
DELETE FROM `test`.`restaurants` WHERE id > 5;

/* Delete an existing restaurants */
DELETE FROM `test`.`restaurants` WHERE id = 6;

/* Get max restaurant id */
SELECT MAX(id) FROM `test`.`restaurants`;
