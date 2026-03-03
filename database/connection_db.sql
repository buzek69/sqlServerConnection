create database connection_db
use connection_db

create table users(
	user_id INT identity(1,1),
	name	VARCHAR(40) NOT NULL,
	lastName	VARCHAR(40) NOT NULL,
	constraint users_pk PRIMARY KEY(user_id)
	)

insert into users(name,lastName) values ('matej','buzek')
insert into users(name,lastName) values ('jozef','buzek')


select * from users