USE `carver-anna-isabella-gomes-quaranta`;

## Criação da tabela

CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

1- a) VARCHAR(255) - string que aceita 255 caracteres
DATE - Tipo para data
PRIMARY KEY - Chave primária, identificador de cada elemento da tabela
NOT NULL - Não aceita valores Null

## ----------------------------------------------------------------------------

SHOW DATABASES; # MOSTRA OS BANCOS DE DADOS QUE EU TENHO ACESSO

SHOW TABLES; # MOSTRA AS TABELAS QUE EXISTEM NO MEU BANCO DE DADOS

DESCRIBE Actor; # MOSTRA O CAMPO, O TIPO, SE É NULL, QUAIS SÃO PRIMARY KEY, DEFAULT E EXTRA

## ----------------------------------------------------------------------------

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("001", "Tony Ramos", 400000, "1948-08-25", "male"),
("002", "Glória Pires", 1200000, "1963-08-23", "female");

2-b) Error Code: 1062. Duplicate entry '2' for key 'PRIMARY' - Duas chaves não podem ser iguais, pois são elas que identificam um dado.

## ----------------------------------------------------------------------------

INSERT INTO Actor (id, name, salary)

VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
); #Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1 - Tem mais dados que parâmetros.

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
); #Código de erro: 1364. O campo 'nome' não tem um valor padrão 0,141 seg - name não pode ter valor nulo


INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
); # Data tem que ser uma string

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"003",
	"Andrew Garfield",
    6000000,
    "1983-08-20",
    "male"
);
## ----------------------------------------------------------------------------

SELECT * FROM Actor;
SELECT * FROM Actor WHERE gender = "female";
SELECT * FROM Actor WHERE name = "Tony Ramos";
SELECT * FROM Actor WHERE gender = "invalid"; #Não retornou nada. Não há dados com gender invalid.
SELECT id, name, salary FROM Actor WHERE salary < 500000;
SELECT id, name from Actor WHERE id = "002"; #Não há coluna chamada nome
SELECT * from Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000; #Não há coluna chamada nome
#4-a) Esse select vai pegar todas as informações da tabela Actor que comece com A ou J e que tenha um salario acima de 300 mil reais
SELECT * from Actor WHERE (name NOT LIKE "A%") AND salary > 350000;
SELECT * from Actor WHERE (name LIKE "%G%" OR name LIKE "%G%"); 
SELECT * from Actor WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%" )  AND salary BETWEEN 350000 AND 900000;
#TRUNCATE TABLE Actor

## ----------------------------------------------------------------------------

# Minha tabela

CREATE TABLE Movies (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    releaseDate DATE NOT NULL,
    rating INT NOT NULL
);

DROP TABLE Movies;

INSERT INTO Movies (id, title, synopsis, releaseDate, rating)
VALUES ("001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7),
("002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10),
("003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8),
("004",
"O Auto da Compadecida",
"As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
"2000-09-10",
9);

SELECT id, title, rating FROM Movies WHERE id = "004";
SELECT * FROM Movies WHERE title = "Se Eu Fosse Você";
SELECT id, title, synopsis FROM Movies WHERE rating >= 7;
SELECT * FROM Movies WHERE title LIKE "%vida%";
SELECT * FROM Movies WHERE title LIKE "%aventuras%" OR synopsis LIKE "%aventuras%";
SELECT * FROM Movies WHERE releaseDate < CURDATE();
SELECT * FROM Movies WHERE (releaseDate < CURDATE()) AND (title LIKE "%aventuras%" OR synopsis LIKE "%aventuras%") AND (rating >= 7);