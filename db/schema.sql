DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS titleName;
DROP TABLE IF EXISTS department;

/* depts table */
CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

/* table for role ie Fire Cheif, Admin, and Office Assistant */
CREATE TABLE titleName (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(40) NOT NULL,
    salary DECIMAL(10,2),
    dept_id INTEGER,
    FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    titleName_id INTEGER,
    FOREIGN KEY (titleName_id) REFERENCES titleName(id) ON DELETE SET NULL
);