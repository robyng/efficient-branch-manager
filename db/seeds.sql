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

INSERT INTO employee (first_name, last_name, titleName_id)
VALUES 
('Ricardo', 'Ortiz', 14),
('Chad', 'Bradley', 13),
('Brian', 'Pries', 12),
('Lanty', 'Molloy Jr', 11),
('Jeff', 'Baker', 10),
('Timothy', 'Louis', 9),
('Christy', 'Adonis', 8),
('Julie', 'Parenti', 7),
('Patricia', 'Koch', 6),
('John', 'Kammeyer II', 4),
('Bruce', 'Barron', 5),
('Michael', 'Brownrigg', 3),
('Sophie', 'Cole', 2),
('Ricardo', 'Ortiz', 1);