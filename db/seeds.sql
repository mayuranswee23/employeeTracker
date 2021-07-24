INSERT INTO department (name)
VALUES
('Human Resources'), 
('IT'), 
('Finance'), 
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
('HR Manager', 80000.00, 1),
('HR Associate', 60000.00, 1),
('IT Manager', 100000.00, 2),
('IT Specialist', 75000.00, 2),
('Financial Manager', 110000.00, 3),
('Finance Associate', 70000.00, 3),
('Sales Manager', 90000.00, 4),
('Sales Associate', 70000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Cristiano', 'Ronaldo', 1, NULL),
('Lionel', 'Messi', 3, NULL),
('LeBron', 'James', 2, 1),
('Steph', 'Curry', 2, 1),
('Tiger', 'Woods', 4, 3), 
('Warren', 'Buffet', 5, NULL),
('Rapheal', 'Nadal', 6, 5),
('Kyle', 'Lowry', 8, 7),
('Wayne', 'Rooney', 8, 7),
('Andrea', 'Pirlo', 7, NULL),
('John', 'Cena', 2, 1), 
('The', 'Rock', 3, 1);