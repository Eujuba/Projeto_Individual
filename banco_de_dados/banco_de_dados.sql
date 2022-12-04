CREATE DATABASE IF NOT EXISTS beatles;
USE beatles;

CREATE TABLE  IF NOT EXISTS integrante (
	idIntegrante int primary key auto_increment,
    nome varchar (45),
    qnt_tirado int
);

CREATE TABLE IF NOT EXISTS album (
	idAlbum int primary key auto_increment,
    nome varchar (45),
    qnt_tirado int
);

-- 1 pessoa pode votar em até muitos álbuns

insert into album values 
(null, 'Abbey Road', 0),
(null, 'The Beatles', 0),
(null, 'Help', 0);

insert into integrante values
(null, 'John Lennon', 0),
(null, 'Paul McCartney', 0),
(null, 'Ringo Starr', 0),
(null, 'George Harrison', 0);

CREATE TABLE  IF NOT EXISTS usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(100),
    fkIntegrante int, 
    foreign key (fkIntegrante) references integrante (idIntegrante)
);

-- 1 pessoa pode comentar sua historia, e 1 história é feita por uma pessoa

CREATE TABLE IF NOT EXISTS comentario (
	idComentario INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);

        SELECT idComentario,
            titulo,
            descricao,
            fkUsuario,
            id,
            nome,
            email,
            senha
        FROM comentario
            INNER JOIN usuario 
                ON fkUsuario = id;
select * from integrante;
select nome,qnt_tirado from integrante;
select * from usuario;
select * from comentario;
select * from album;