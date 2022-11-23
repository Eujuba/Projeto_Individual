CREATE DATABASE IF NOT EXISTS beatles;

USE beatles;

CREATE TABLE  IF NOT EXISTS integrante (
	idIntegrante int primary key auto_increment,
    nome varchar (45)
);

CREATE TABLE  IF NOT EXISTS usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    fkIntegrante int, 
    foreign key (fkIntegrante) references integrante (idIntegrante)
);


CREATE TABLE  IF NOT EXISTS musica_favorita (
    nome varchar (45)
);

CREATE TABLE IF NOT EXISTS comentario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

Insert into integrante values
(null, 'Paul McCartney'),
(null, 'John Lennon'),
(null, 'Ringo Starr'),
(null, 'George Harrison');
