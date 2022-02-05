## Exercício 1

a) Remove a columa de salário.
b) Muda o nome da coluna de gender para sex que é uma string de até 6 caracteres.
c) Ele troca a quantidade de caracteres da coluna gender

d) 
```
ALTER TABLE Actor CHANGE gender gender varchar(100);
```

## Exercício 2
a)
```
UPDATE Actor SET name = "Brad Pitt", birth_date = "1963-12-18" WHERE id = "003";
```

b)
```
UPDATE Actor SET name = "Glória Pires" WHERE id = "002";
```

c)
```
UPDATE Actor SET name = "Moacyr Franco", birth_date = "2020-02-10", salary = 600000, gender = "male"
WHERE id = "005";
```

## Exercício 3

a) 
```
DELETE FROM Actor WHERE name = "Brad Pitt";
```

b) 
```
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```

## Exercício 4

a) 
```
SELECT MAX(salary) as maiorSalario FROM Actor;
```
b)
```
SELECT MIN(salary) as menorSalario FROM Actor WHERE gender = "female";
```
c)
```
SELECT COUNT(name) AS quantidadeDeAtrizes FROM Actor WHERE gender = "female";
```
d)
```
SELECT SUM(salary) AS somaDosSalarios FROM Actor;
```

## Exercício 5

a) Ele conta a quantidade de cada genero.

b)
```
SELECT id, name FROM Actor ORDER BY name DESC;
```
c)
```
SELECT * FROM Actor ORDER BY salary ASC;
```
d)
```
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```
d)
```
SELECT AVG(salary), gender AS MEDIA FROM Actor GROUP BY gender;
```

## Exercício 6
```
a) ALTER TABLE Movies ADD playing_limit_date DATE;
```

b)
```
ALTER TABLE Movies CHANGE rating rating float;
```
c) 
```
UPDATE Movies SET playing_limit_date = "2022-03-01" WHERE id = "001";
UPDATE Movies SET playing_limit_date = "2021-03-01" WHERE id = "002";
```
d) 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0 - não teve nenhuma mudança
```
DELETE FROM Movies WHERE id = 001;

UPDATE Movies SET synopsis = "sei lá bla bla bla" WHERE id = "001";
```

# DESAFIOS

## Exercício 7

a)
```
SELECT COUNT(id) FROM Movies WHERE rating > 7.5 ;
```
b)
```
SELECT AVG(rating) FROM Movies;
```
c)
```
SELECT COUNT(*) FROM Movies WHERE playing_limit_date > CURDATE();
```
d)
```
SELECT COUNT(*) FROM Movies WHERE releaseDate > CURDATE();
```
e)
```
SELECT MAX(rating) FROM Movies;
```
f)
```
SELECT MIN(rating) FROM Movies;
```

## Exercício 8

a)
```
SELECT * FROM Movies ORDER BY title;
```
b)
```
SELECT * FROM Movies ORDER BY title LIMIT 5;
```
c)
```
SELECT * FROM Movies ORDER BY releaseDate DESC LIMIT 3;
```
d)
```
SELECT * FROM Movies ORDER BY rating DESC LIMIT 3;
```
