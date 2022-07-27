-- 현재 접속한 유저 확인 
select current_user();

-- Dept 테이블과 같은 구조의 테이블 생성 (데이터 없음)
create table Dept2 like Dept;
select * from Dept2;

-- Dept 테이블과 같은 구조와 데이터를 가진 테이블 생성 
create table Dept3 AS select * from Dept;
select * from Dept3;

-- 테이블 생성 명령 확인 
show create table Dept3;

create table Emp2 as select * from Emp;
select * from Emp2;
show create table Emp2;

alter table testdb.Emp2
add primary key(id);
desc Emp2;

drop table Dept2;
drop table Dept3;
drop table Emp2;


select @@time_zone; -- @@는 전역 변수?
show variables like '%time_zone%';  -- 두 개 똑같음 
-- set global time_zone = 'UTC'; -- root 권한만 가능 

alter table Dept 
add column workdate timestamp not null default current_timestamp
on update current_timestamp;
show create table Dept;

select * from Dept;

update Dept
set dname='클라팀' where id = 7;


create table Test(
	id int unsigned not null auto_increment,
    ttt varchar(31) not null,
    primary key(id)
);
select * from Test;
insert into Test(ttt, dept) values('aaa1',3),('aaa2',4),('aaa3',5),('aaa4',6),('aaa5',7);
-- update Test set dept = f_rand1('34567') where id>0;

show create table Test;

truncate table Test; -- id 1부터 다시 시작
-- delete from Test where id > 0; id 이어서 다시 시작

update Test set ttt='한글뷐' where id=5;


update Dept set dname='클라팀🍟' where id=7;