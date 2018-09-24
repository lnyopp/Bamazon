DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (

	item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(45) NOT NULL,
    department_name VARCHAR(45) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    PRIMARY KEY (item_id)
    
    );
    
    SELECT * FROM products;
    
    INSERT INTO products (product_name, department_name, price, stock_quantity)
    Values
    ("Uncharted 4", "Video Games",60.00,5);
    
    
    INSERT INTO products (product_name, department_name, price, stock_quantity)
    Values
    ("Uncharted 4", "Video Games",60.00,5);
    
    INSERT INTO products (product_name, department_name, price, stock_quantity)
    Values
    ("Uncharted 4", "Video Games",60.00,5);