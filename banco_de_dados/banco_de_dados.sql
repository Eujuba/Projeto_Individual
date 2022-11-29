CREATE DATABASE IF NOT EXISTS beatles;
USE beatles;

CREATE TABLE  IF NOT EXISTS integrante (
	idIntegrante int primary key auto_increment,
    nome varchar (45),
    qnt_tirado int
);

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

CREATE TABLE  IF NOT EXISTS musica_favorita (
    nome varchar (45),
    fkUsuario int,
    foreign key (fkUsuario) references usuario (id)
);

CREATE TABLE IF NOT EXISTS comentario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

select* from integrante;
select nome,qnt_tirado from integrante;
select* from usuario;
select* from musica_favorita;
select* from comentario;

update integrante set qnt_tirado = '1'where idIntegrante = 1;

select count(fkIntegrante) from usuario where fkIntegrante = 1;
select count(fkIntegrante) from usuario where fkIntegrante = 2;
select count(fkIntegrante) from usuario where fkIntegrante = 3;
select count(fkIntegrante) from usuario where fkIntegrante = 4;