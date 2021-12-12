/*departments first because of dependencies*/
INSERT INTO department (name)
VALUES ('Fire Board', 'Executive Staff', 'Prevention Preparedness', 'Operations')

INSERT INTO role (title, salary, dept_id)
VALUES ('Fire Board Chair', 0.0, 1), 
('Fire Board Member', 0.0, 1),
('Fire Board Member', 0.0, 1),
('Fire Chief', 247,931.06, 2),
('Deputy Fire Chief', 220,427.12, 2),
('Fire Marshal', 164,658.69, 3),
('Deputy Fire Marshal', 57,727.44, 3),
('Fire Inspector', 138,948.59, 3),
('Fire Prevention Specialist', 54,109.95, 3)
('Battalian Chief A', 189,102.52, 4 ),
('Battalian Chief B', 175,340.22, 4),
('Fire Captian', 129,480.11, 4),
('Fire Fighter', 94,486.34, 4),
('Fire Fighter', 88,743.01, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Chad', 'Bradley', 13),
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