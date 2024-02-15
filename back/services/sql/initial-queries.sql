-- Create the users table
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` INT PRIMARY KEY AUTO_INCREMENT,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `user_email` VARCHAR(255) NOT NULL UNIQUE,
  `user_password` VARCHAR(255) NOT NULL,
  `user_city` VARCHAR(255),
  `user_subcity` VARCHAR(255),
  `user_phone` VARCHAR(20),
  `created_at` DATETIME,
  INDEX (`user_email`)
) ENGINE=InnoDB;

-- Create the wan_ip table
CREATE TABLE IF NOT EXISTS `wan_ip` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `wan_ip` VARCHAR(15) NOT NULL,
  `subnet_mask` VARCHAR(15) NOT NULL,
  `default_gateway` VARCHAR(15) NOT NULL,
  `router_model` VARCHAR(50) NOT NULL
) ENGINE=InnoDB;
