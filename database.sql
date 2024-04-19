create database SUBER;
use SUBER;

create table lead_user(
	id int auto_increment primary key,
    name varchar(255) not null,
    email varchar(100) not null, 
    telefone int not null,
    data_nascimento date not null,
    cpf_cnpj int not null,
    valor_investimento int not null
);

select * from lead_user;