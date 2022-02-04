## Exercício 1

a) Chave estrangeira é uma chave que conecta duas tabelas.

b)
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);
DROP TABLE Rating;
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("001", "Se eu fosse você parece ser bem legal", 6, "001"),
("002", "Não curto filme antigo e esse parece ser", 4, "002"),
("003", "Dona Flor tinha dois maridos e de duas uma: ou devia ser presa por bigamia, ou um deles não sabia e é corno", 8, "003"),
("004", "Auto da Compadecida´simplesmente é um icone do Brasil, melhor filme ever e só minha opinião que importa", 10, "004");
```

c) 
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-anna-isabella-gomes-quaranta`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`)) 
```
- significa que ele nao está reconhecendo o id desse filme.

d)
```
ALTER TABLE Movies DROP COLUMN rating
```

e)
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`carver-anna-isabella-gomes-quaranta`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
```
- não posso atualizar ou apagar uma linha que tenha uma referencia

## Exercício 2
 
```
CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
    actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```

a) Uma tabela que conecta um id de filme a um ator.

b) 
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES
("001", "001"),
("001", "002"),
("002", "003"),
("003", "004"),
("004", "003"),
("004", "006"),
("002", "007"),
("004", "007");
```

c)
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-anna-isabella-gomes-quaranta`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```
- Ele não reconheceu o id do ator inexistente e deu esse erro.

d) 
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`carver-anna-isabella-gomes-quaranta`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```
- Não pode apagar um ator que tem uma chave secundária.

## Exercício 3

a) Selecione todas as informações da tabela Movie junto com a tabela Rating mas que tenha o id igual. O id ON é um operador que cria uma condição para que retorne.

b)
```
SELECT title, Movies.id, rate FROM Movies
JOIN Rating
ON Movies.id = Rating.id;
```

# DESAFIOS

## Exercício 4

a)
```
SELECT Movies.title, Movies.id, Rating.rate, Rating.comment
FROM Movies
LEFT JOIN Rating
ON Movies.id = Rating.movie_id
```

b)
```
SELECT Movies.id, Movies.title, MovieCast.actor_id FROM Movies
RIGHT JOIN MovieCast
ON Movies.id = MovieCast.movie_id
ORDER BY title;
```

c)
```
SELECT AVG(Rating.rate), Movies.title FROM Rating
RIGHT JOIN Movies
ON Rating.id = Movies.id
GROUP BY Movies.id;
```

## Exercício 5

a) Selecione todas as informações da tabela Movies mesmo que não tenha todas as informações iguais, junte com a tabela MovieCast caso o id de Movies seja igual ao id de MovieCast, e junte com a tabela Actor caso o id de Actor seja igual ao id de Movie Cast. No final ele vai pegar as informações de Movie e juntar com o elenco do filme.
Foi necessário 2 JOIN pra fazer a ligação das tres tabelas.

b) 
```
SELECT m.id, m.title, a.id, a.name FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

c)
```
SELECT m.id as movie_id, m.title, a.id as actor_id, a.name FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

d) 
```
SELECT m.id, m.title, a.name, r.rate, r.comment FROM Movies m
JOIN MovieCast mc
ON m.id = mc.movie_id
JOIN Actor a
ON a.id = mc.actor_id
JOIN Rating r
ON r.movie_id = m.id
ORDER BY m.id
```

## Exercício 6

a) Essa relação é M:N já que vários filmes podem ganhar vários oscars.

b) 
```
CREATE TABLE oscar_movie(
	name VARCHAR(255),
    date DATE,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
)
```
- criei uma tabela com nome, data e um id do filme que será a chave secundária.

c)
```
INSERT INTO oscar_movie
VALUES ("Óscar de melhor filme", "2018-07-02", "004"),
("Óscar de melhor roteiro", "2011-08-03", "004"),
("Óscar de melhor direção", "2017-04-24", "003"),
("Óscar de melhor trilha sonora", "2019-10-06", "003"),
("Óscar de melhor direção", "2017-04-24", "002"),
("Óscar de melhor atriz", "2009-09-09", "002"),
("Óscar de melhor roteiro", "2012-05-09", "001"),
("Óscar de melhor atriz", "2009-09-09", "001");
```

d)
```
SELECT m.id, m.title, om.name, om.date FROM Movies m
LEFT JOIN oscar_movie om
ON m.id = om.movie_id
ORDER BY m.id
```