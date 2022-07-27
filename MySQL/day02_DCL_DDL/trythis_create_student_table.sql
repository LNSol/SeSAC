create table Student (
	id int not null auto_increment,
    sname varchar(32) not null,
    addr varchar(30) not null,
    birth varchar(8) not null,
    tel varchar(15) not null,
    email varchar(31) not null,
    regdt timestamp default current_timestamp,
    PRIMARY KEY (id)
);

select * from Student;

insert into Student (sname, addr, birth, tel, email)
values (f_student_randname(), '용산구', '19980112', f_student_randphone(), 'dmsgk1559@gmail.com');

insert into Student (sname, addr, birth, tel, email)
values (f_student_randname(), '금천구', '19940205', f_student_randphone(), 'jang27@gmail.com');

insert into Student (sname, addr, birth, tel, email)
values (f_student_randname(), '강서구', '20011016', f_student_randphone(), 'hoho20@gmail.com');

-- truncate table Student;


