function Employee(_name, _companyName, _jobPosition, _salary) {
  this.name = _name;
  this.companyName = _companyName;
  this.jobPosition = _jobPosition;
  this.salary = _salary;
}

Employee.prototype.generateHTML = function() {
  return `<li>${this.name}, ${this.companyName}, ${this.jobPosition}, ${this.salary}</li>`;
}

const employee1 = new Employee( "Hristijan Zgig:",
"ABC Company",
   "Employee",
   50000)
const employee2 = new Employee( "Branko Smith:", "XYZ Inc", "Director", 80000)
const employee3 = new Employee( "Andrei Johnson:","123 Corporation","Boss",100000)

const div = document.querySelector(".employees");
const ul = document.createElement("ul");
let employees = [employee1, employee2, employee3];

employees.forEach((employee) => {
  ul.innerHTML += employee.generateHTML()
})

div.appendChild(ul)