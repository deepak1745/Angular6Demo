import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import {Employee} from'./employee.model'

@Injectable()
export class EmployeeService {

  selectedEmployee : Employee;
  employeeList : Employee[];
  constructor(private httpclient : HttpClient) { }

  postEmployee(emp : Employee){
    var body = JSON.stringify(emp);
    alert(body);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.httpclient.post("http://localhost:28750/api/Employee", body);
  
  }

  putEmployee(id, emp) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.httpclient.put('http://localhost:28750/api/Employee/' + id,
      body).map(res => res);
  }

  getEmployeeList(){
    this.httpclient.get('http://localhost:28750/api/Employee')
    .subscribe((data:Employee[])=>{
      this.employeeList = data;
      console.log('user data', data);
    })
  
  }

  deleteEmployee(id: number) {
    return this.httpclient.delete('http://localhost:28750/api/Employee/' + id).map(res => res);
  }
}
