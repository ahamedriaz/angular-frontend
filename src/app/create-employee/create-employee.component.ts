import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  submitted = false;

  /* Initially define the below property in Typescript for before employee form creation */
  employee: Employee = new Employee();

  constructor(private _employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {

  }

  /* Post data into mysql database & Data view in UI */
  saveEmployee() {

    this._employeeService.createEmployee(this.employee).subscribe(data => {
      
      console.log(data);

      this.goToEmployeeList();
    },
      error => console.log(error));
  }

  /* Once data insert into db after that page will redirect into employeeList */
  goToEmployeeList() {
    this.router.navigate(['/employees'])

  }

  /* During onSubmit print the data and view inspect mode into browser */
  onSubmit() {
    this.submitted = true;
    console.log(this.employee);

    this.saveEmployee();
  }

}
