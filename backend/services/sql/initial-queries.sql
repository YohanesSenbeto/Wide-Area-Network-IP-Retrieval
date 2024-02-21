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
CREATE TABLE IF NOT EXISTS `wan_ipaddress` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `wan_ipaddress` VARCHAR(15) NOT NULL,
  `subnet_mask` VARCHAR(15) NOT NULL,
  `default_gateway` VARCHAR(15) NOT NULL,
  `router_model` VARCHAR(50) NOT NULL
) ENGINE=InnoDB; 

-- Create the TutorialTable
CREATE TABLE IF NOT EXISTS `tutorial_table` (
    `tutorial_id` INT PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `video_link` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `router_name` VARCHAR(50) NOT NULL,
    `tech_details` TEXT,
    `tutorial_category` VARCHAR(50),
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Customers tables  
CREATE TABLE IF NOT EXISTS `customer_identifier` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_email` varchar(255) NOT NULL,
  `customer_phone_number` varchar(255) NOT NULL,
  `customer_added_date` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `customer_hash` varchar(255) NOT NULL,
  PRIMARY KEY (customer_id),
  UNIQUE (customer_email)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `customer_info` (
  `customer_info_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL, 
  `customer_first_name` varchar(255) NOT NULL,
  `customer_last_name` varchar(255) NOT NULL,
  `active_customer_status` int(11) NOT NULL,
  PRIMARY KEY (customer_info_id),
  FOREIGN KEY (customer_id) REFERENCES customer_identifier(customer_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `customer_router_info` (
  `router_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL, 
  `router_model` varchar(255) NOT NULL,
  `router_type` varchar(255) NOT NULL,
  `router_ip` varchar(255) NOT NULL,
  `router_serial` varchar(255) NOT NULL,
  `router_color` varchar(255) NOT NULL,
  PRIMARY KEY (router_id),
  FOREIGN KEY (customer_id) REFERENCES customer_identifier(customer_id)
) ENGINE=InnoDB;

-- Company tables 
CREATE TABLE IF NOT EXISTS `company_roles` (
  `company_role_id` int(11) NOT NULL AUTO_INCREMENT,
  `company_role_name` varchar(255) NOT NULL,
  PRIMARY KEY (company_role_id),
  UNIQUE (company_role_name)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `common_services` (
  `service_id` int(11) NOT NULL AUTO_INCREMENT,
  `service_name` varchar(255) NOT NULL,
  `service_description` TEXT,
  PRIMARY KEY (service_id)
) ENGINE=InnoDB;

-- staff tables 
CREATE TABLE IF NOT EXISTS `staff` (
  `staff_id` int(11) NOT NULL AUTO_INCREMENT,
  `staff_email` varchar(255) NOT NULL,
  `active_staff` int(11) NOT NULL,
  `added_date` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (staff_id), 
  UNIQUE (staff_email)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `staff_info` (
  `staff_info_id` int(11) NOT NULL AUTO_INCREMENT,
  `staff_id` int(11) NOT NULL,
  `staff_first_name` varchar(255) NOT NULL,
  `staff_last_name` varchar(255) NOT NULL,
  `staff_phone` varchar(255) NOT NULL,
  PRIMARY KEY (staff_info_id),
  FOREIGN KEY (staff_id) REFERENCES staff(staff_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `staff_pass` (
  `staff_pass_id` int(11) NOT NULL AUTO_INCREMENT,
  `staff_id` int(11) NOT NULL,
  `staff_password_hashed` varchar(255) NOT NULL,
  PRIMARY KEY (staff_pass_id),
  FOREIGN KEY (staff_id) REFERENCES staff(staff_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `staff_role` (
  `staff_role_id` int(11) NOT NULL AUTO_INCREMENT,
  `staff_id` int(11) NOT NULL,
  `company_role_id` int(11) NOT NULL,
  PRIMARY KEY (staff_role_id),
  FOREIGN KEY (staff_id) REFERENCES staff(staff_id),
  FOREIGN KEY (company_role_id) REFERENCES company_roles(company_role_id)
) ENGINE=InnoDB;

-- Order tables  
CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `staff_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `router_id` int(11) NOT NULL,
  `order_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `active_order` int(11) NOT NULL,
  `order_hash` varchar(255) NOT NULL,
  PRIMARY KEY (order_id),
  FOREIGN KEY (staff_id) REFERENCES staff(staff_id), 
  FOREIGN KEY (customer_id) REFERENCES customer_identifier(customer_id),
  FOREIGN KEY (router_id) REFERENCES customer_router_info(router_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `order_info` (
  `order_info_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `order_total_price` int(11) NOT NULL,
  `estimated_completion_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `completion_date` DATETIME,
  `additional_request` TEXT,
  `notes_for_internal_use` TEXT,
  `notes_for_customer` TEXT,
  `additional_requests_completed` int(11) NOT NULL,
  PRIMARY KEY (order_info_id),
  FOREIGN KEY (order_id) REFERENCES orders(order_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `order_services` (
  `order_service_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  `service_completed` int(11) NOT NULL,
  PRIMARY KEY (order_service_id),
  FOREIGN KEY (order_id) REFERENCES orders(order_id),
  FOREIGN KEY (service_id) REFERENCES common_services(service_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `order_status` (
  `order_status_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `order_status` int(11) NOT NULL,
  PRIMARY KEY (order_status_id),
  FOREIGN KEY (order_id) REFERENCES orders(order_id)
) ENGINE=InnoDB;

-- Create the BlogPostsTable
CREATE TABLE IF NOT EXISTS `blog_posts` (
    `post_id` INT PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `content` TEXT NOT NULL,
    `author_id` INT NOT NULL,
    `category` VARCHAR(50),
    `tags` VARCHAR(255),
    `published_at` DATETIME,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES staff(`staff_id`)
) ENGINE=InnoDB;

-- Create the RouterTable
CREATE TABLE IF NOT EXISTS `router_table` (
    `router_id` INT PRIMARY KEY AUTO_INCREMENT,
    `router_model` VARCHAR(50) NOT NULL,
    `wan_ipaddress` VARCHAR(15) NOT NULL,
    FOREIGN KEY (wan_ipaddress) REFERENCES wan_ipaddress(`wan_ipaddress`),
    FOREIGN KEY (router_model) REFERENCES wan_ipaddress(`router_model`)
) ENGINE=InnoDB;

-- Add the roles to the database 
INSERT INTO company_roles (company_role_name)
VALUES ('staff'), ('Manager'), ('Admin');

-- This is the admin account 
INSERT INTO staff (staff_email, active_staff, added_date)
VALUES ('admin@admin.com', 1, CURRENT_TIMESTAMP);

INSERT INTO staff_info (staff_id, staff_first_name, staff_last_name, staff_phone)
VALUES (1, 'Admin', 'Admin', 555-555-5555); 

-- Password is 123456
INSERT INTO staff_pass (staff_id, staff_password_hashed)
VALUES (1, '$2b$10$B6yvl4hECXploM.fCDbXz.brkhmgqNlawh9ZwbfkFX.F3xrs.15Xi');  

INSERT INTO staff_role (staff_id, company_role_id)
VALUES (1, 3); 
