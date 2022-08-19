class EmpDeptManager {
  static #_manager;
  #_emps;
  #_depts;
  #_empMap;
  #_deptMap;
  constructor() {
    if (EmpDeptManager.#_manager) 
      return EmpDeptManager.#_manager;
    EmpDeptManager.#_manager = this;
    this.#_emps = [];
    this.#_depts = [];
    this.#_empMap = new Map();
    this.#_deptMap = new Map();
  }
  static getManager() {
    return EmpDeptManager.#_manager || new this();
  }
  get emps() {
    return this.#_emps;
  }
  get depts() {
    return this.#_depts;
  }
  get empMap() {
    return this.#_empMap;
  }
  get deptMap() {
    return this.#_deptMap;
  }
  addDept(dept) {
    this.#_depts.push(dept);
    this.#_deptMap.set(dept.dname, dept);
    return this;
  }
  addEmp(emp) {
    this.#_emps.push(emp);
    this.#_empMap.set(emp, this.#_depts.find(dept => dept.id === emp.dept));
    return this;
  }
  // addDept2(dept) {
  //   this.#_depts.push(dept);
  //   this.#_deptMap.set(dept.id, dept);
  //   return this;
  // }
  // addEmp2(emp) {
  //   this.#_emps.push(emp);
  //   this.#_empMap.set(emp, this.#_deptMap.get(emp.dept));
  //   return this;
  // }
}
class Emp {
  constructor(id, name, dept) {
    this.id = id;
    this.name = name;
    this.dept = dept;
  }
}
class Dept {
  constructor(id, dname) {
    this.id = id;
    this.dname = dname;
  }
}
const manager = EmpDeptManager.getManager();

const hrTeam = new Dept(1, '인사팀');
const devTeam = new Dept(2, '개발팀');
manager.addDept(hrTeam).addDept(devTeam);
console.log(manager.deptMap);

const kim = new Emp(1, '김시연', 1);
const lim = new Emp(2, '임은하', 2);
const jang = new Emp(3, '장보영', 1);
const go = new Emp(4, '고관욱', 1);
manager.addEmp(kim).addEmp(lim).addEmp(jang).addEmp(go);
console.log(manager.empMap);