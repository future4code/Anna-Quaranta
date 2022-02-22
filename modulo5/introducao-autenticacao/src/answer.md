> Exercício 1
    
    1. Acho mais fácil para usar como validação já que o header vai retornar uma string.

> Exercício 2

    2- a). Tem a conexão com o banco de dados. Uma varíavel com o nome da tabela, e uma função que insere um id, email e password dentro da tabela da variável.

    b) CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL);

> Exercício 3

    3. Ela faz com que a chave de acesso seja considerada uma string.

> Exercício 7

    7. a) Ela tipa a função como any, ou seja, pode retornar qualquer valor. Precisamos usar para que o código não quebre.