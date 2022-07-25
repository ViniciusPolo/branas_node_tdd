create schema blog;

create table blog.post (  -- no pg somente post
	id serial primary key,
	title text not null,
	content text not null,
	date timestamp default now());

create table blog.users (
 id serial primary key,
 name text not null,
 email text not null,
 date timestamp default now());