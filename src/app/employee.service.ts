import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private HttpClient: HttpClient) { }

  /* Fetch the data from Web API URL using REST */
  getEmployeesList(): Observable<Employee[]> {

    return this.HttpClient.get<Employee[]>(`${this.baseURL}`);
  }

  /* Post the data to Web API URL using REST + MySQL */
createEmployee(employee:Employee):Observable<Object>{

  return this.HttpClient.post(`${this.baseURL}`,employee);
}

/* Fetch and display the data from DB in update form by ID based */
getEmployeeById(id:number):Observable<Employee>{

  return this.HttpClient.get<Employee>(`${this.baseURL}/${id}`);
}

 /* Update the data to Web API URL using REST + MySQL */
updateEmployee(id:number,employee:Employee):Observable<Object>{

  return this.HttpClient.put(`${this.baseURL}/${id}`,employee);

}

deleteEmployee(id:number):Observable<Object>{

  return this.HttpClient.delete(`${this.baseURL}/${id}`); 
}

}