-- Active: 1669062311547@@localhost@5432@sequelizeTS@public

CREATE TABLE
    users (
        id SERIAL PRIMARY KEY,
        name VARCHAR (40),
        email TEXT
    );

insert into users (name, email)
values ('allan', 'allan@gmail.com'), (
        'martina',
        'martina@gmail.com'
    );

select * from users;