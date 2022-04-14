import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ChangeDetectionStrategy } from '@angular/compiler';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-quickstart';
  color = '#3DCC93';
	percentage = new BehaviorSubject(0);

  constructor(private http: HttpClient, private cd: ChangeDetectorRef){

  }
ngOnInit(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',

      'Authorization': 'bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIwX2Jyb29rZXMuZGpAZ21haWwuY29tXzIiLCJzY29wZSI6WyJhbGwiXSwiZGV0YWlsIjp7Im9yZ2FuaXphdGlvbklkIjowLCJ0b3BHcm91cElkIjpudWxsLCJncm91cElkIjpudWxsLCJyb2xlSWQiOi0xLCJ1c2VySWQiOjQ4NzM3MCwidmVyc2lvbiI6NCwiaWRlbnRpZmllciI6ImJyb29rZXMuZGpAZ21haWwuY29tIiwiaWRlbnRpdHlUeXBlIjoyLCJhcHBJZCI6IjIwMjExMjI4MzMzMzM5MiJ9LCJleHAiOjE2NTUxMjIwNzIsImF1dGhvcml0aWVzIjpbImFsbCJdLCJqdGkiOiI5YmFjNWZhNy05ZjRlLTQ3M2ItYTI0OS05NzE1MzhjNGNlYTIiLCJjbGllbnRfaWQiOiJ0ZXN0In0.EhOaT9rY0fA2fIaPdYUOymheSvrDBBepAJIpPrBeuIsM9sLxMoHHlyLyZD9B07zw91J-6xT2ye4wee_mcKBbsRSQwXqSU9mgVvLJO-_sJSx6w6oahexFPLeFEI66bGW0GknhyDVW0IvEHvJ7bldo19Udv9-kru9zzIe7bhjNDmYQWQcLkrYvkbGH5p3pHMMUg_AW5mfdDIhxAt6NpyJxdjzl4CmVbMgc4PG5MXvAfy6DDkyJgMcaZo3rZyTVR7h2uLCf4oFkCoApw_x-rNIAL0ehdc5jMlmFxla1sZXCtB0SFfmausGtcgybJC-Xcskb1l-_Hp0PBcYUCXc1H2TOVw'
    }),
    withCredentials: true, 
    observe: 'response' as 'response'
  };
let data = {
  "stationId": 1446865
}
setTimeout(() => {
// this.percentage = 50;

}, 100)
// this.percentage = 50;
let xyz = this
this.http.post(' https://ftivnmieuk.execute-api.eu-west-1.amazonaws.com/getBatteryLevel', data, httpOptions).subscribe(response => {
  console.log(JSON.stringify(response.body));
let x: any = response.body
console.log(x['batterySoc'])
this.percentage.next(x['batterySoc'])


})
}
}
