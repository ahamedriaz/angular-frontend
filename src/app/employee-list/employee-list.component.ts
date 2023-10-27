import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private _employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {

    this.getEmployees();
  }

  private getEmployees() {

    this._employeeService.getEmployeesList().subscribe(data => {

      this.employees = data;
    });
  }

  updateEmployee(id: number) {

    this.router.navigate(['update-employee', id]);

  }

  /* Delete employee functionality part of code */
  deleteEmployee(id: number) {

    this._employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this, this.getEmployees();
    })
  }

  /* View employee functionality redirect specified ID of URL part code */
  employeeDetails(id: number) {

    this.router.navigate(['employee-details', id]);
  }
}


/* Statically Import 3 Data into listview, Results view into browser
this.employees = [{
  "emp_id": 1,
  "first_name": "Ahamed",
  "last_name": "Riaz",
  "email_id": "ahamed@gmail.com"
},
{
  "emp_id": 2,
  "first_name": "John",
  "last_name": "Cena",
  "email_id": "john@gmail.com"
},
 
{
  "emp_id": 3,
  "first_name": "Randy",
  "last_name": "Ortan",
  "email_id": "randy@gmail.com"
}];
}*/

