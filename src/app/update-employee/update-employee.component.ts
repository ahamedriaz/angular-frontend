import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;

  submitted = false;

  /* Initially define the below property in Typescript for before employee form updation */
  employee: Employee = new Employee();

  constructor(private _employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    /* Fetch data using Activate Route of snapshot & params properties */
    this.id = this.route.snapshot.params['id'];

    this._employeeService.getEmployeeById(this.id).subscribe(data => {

      this.employee = data;

    }, error => console.log(error));
  }

  /* Update Employee During onSubmit print the data and view inspect mode into browser */

  onSubmit() {

    this.submitted = true;

    this._employeeService.updateEmployee(this.id, this.employee).subscribe(data => {

      /* Page will redirect into employee list after the updation */
      this.goToEmployeeList();

    }, error => console.log(error));
  }


  /* Once data insert into db after that page will redirect into employeeList */
  goToEmployeeList() {
    this.router.navigate(['/employees'])

  }


}

