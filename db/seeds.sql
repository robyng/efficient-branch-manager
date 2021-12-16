/*departments first because of dependencies*/
INSERT INTO department (name)
VALUES ('Fire Board'), 
('Executive Staff'), 
('Prevention Preparedness'), 
('Operations');

/* update to have only one role*/
INSERT INTO role (title, salary, dept_id)
VALUES 
('Fire Board Chair', 0.00, 1),
('Fire Board Member', 0.00, 1),
('Fire Chief', 247931.06, 2),
('Deputy Fire Chief', 220427.12, 2),
('Fire Marshal', 164658.69, 3),
('Deputy Fire Marshal', 57727.44, 3),
('Fire Inspector', 138948.59, 3),
('Fire Prevention Specialist', 54109.95, 3),
('Battalian Chief A', 189102.52, 4),
('Battalian Chief B', 175340.22, 4),
('Fire Captian', 129480.11, 4),
('Fire Fighter', 94486.34, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Ricardo', 'Ortiz', 1, null),
('Bruce', 'Barron', 3, 1),
('John', 'Kammeyer II', 4, 2),
('Christine', 'Reed', 5, 3),
('Patricia', 'Koch', 6, 4),
('Julie', 'Parenti', 7, 5),
('Cary', 'Yballa', 7, 5),
('Christy', 'Adonis', 8, 5),
('Jake', 'Plek', 9, 4),
('Timothy', 'Louis', 11, 9),
('Jeff', 'Baker', 11, 9),
('Chad', 'Bradley', 10, 4),
('Brian', 'Pries', 11, 12);