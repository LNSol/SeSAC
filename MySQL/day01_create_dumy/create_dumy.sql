-- 부서 및 직원 테이블 생성 
create table Dept(
	id tinyint unsigned not null auto_increment,
    pid tinyint unsigned not null default 0 comment '상위부서id',
    dname varchar(31) not null,
    PRIMARY KEY(id)
);

create table Emp(
	id int unsigned not null auto_increment,
    ename varchar(31) not null,
    dept tinyint unsigned not null,
    salary int not null default 0,
    primary key(id),
    foreign key(dept) references Dept(id)
);

-- 부서 테이블에 레코드 삽입 (상위 부서)
insert into Dept(pid, dname) values (0, '영업부'), (0, '개발부');
select * from Dept;

-- 부서 테이블에 레코드 삽입 (하위 부서) 
insert into Dept(pid, dname) values (1, '영업1팀'), (1, '영업2팀'), (1, '영업3팀'), (2, '서버팀'), (2, '클라이언트팀');
select * from Dept;

select d1.dname as '상위부서', d2.*
from Dept d1 inner join Dept d2 on d1.id = d2.pid;

select * from Emp;


-- 만든 함수를 이용해 직원 이름 생성
SET GLOBAL log_bin_trust_function_creators=1; -- 설정 문제 해결(?) f_rand1

select f_rand1('1234567');
select f_randname();

desc Emp;

insert into Emp(ename, dept, salary)
values (f_randname(), f_rand1('34567'), f_rand1('123456789') * 100);

select * from Emp;

-- 직원 레코드 삽입 명령을 수행하는 프로시저
call sp_test_emp(250);

select dept, count(*)
from Emp
group by dept;