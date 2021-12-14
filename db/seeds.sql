/*departments first because of dependencies*/
INSERT INTO department (name)
VALUES ('Fire Board'), 
('Executive Staff'), 
('Prevention Preparedness'), 
('Operations');

INSERT INTO titleName (title, salary, dept_id)
VALUES ('Fire Board Chair', 0.00, 1), 
('Fire Board Member', 0.00, 1),
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
('Fire Fighter', 94486.34, 4),
('Fire Fighter', 88743.01, 4);

-- INSERT INTO employee (first_name, last_name, titleName_id, manager_id)
-- VALUES 
-- ('Ricardo', 'Ortiz', 14, null),
-- ('Chad', 'Bradley', 13, null),
-- ('Brian', 'Pries', 12, NULL),
-- ('Lanty', 'Molloy Jr', 11, NULL),
-- ('Jeff', 'Baker', 10, null),
-- ('Timothy', 'Louis', 9, null),
-- ('Christy', 'Adonis', 8, null),
-- ('Julie', 'Parenti', 7, null),
-- ('Patricia', 'Koch', 6, null),
-- ('John', 'Kammeyer II', 4, null),
-- ('Bruce', 'Barron', 5, null),
-- ('Michael', 'Brownrigg', 3, null),
-- ('Sophie', 'Cole', 2, null),
-- ('Marie', 'Chuang', 1, null);

INSERT INTO employee (first_name, last_name, titleName_id, manager_id)
VALUES 
('Ricardo', 'Ortiz', 14, null),
('Chad', 'Bradley', 13, null),
('Brian', 'Pries', 12, null),
('Lanty', 'Molloy Jr', 11, 1),
('Jeff', 'Baker', 10, 2),
('Timothy', 'Louis', 9, 3),
('Christy', 'Adonis', 8, 3),
('Julie', 'Parenti', 7, 3),
('Patricia', 'Koch', 6, 2),
('John', 'Kammeyer II', 4, 1),
('Bruce', 'Barron', 5, 3),
('Michael', 'Brownrigg', 3, 3),
('Sophie', 'Cole', 2, 2),
('Marie', 'Chuang', 1, 1);