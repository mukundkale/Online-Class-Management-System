import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

values: any;
invalidLogin: boolean =false;
constructor(private router: Router, private http: HttpClient,private authService: AuthenticationService) { }

 ngOnInit(): void {
  //  this.getValues();
  }



   onSubmit(f: NgForm) {
    
     console.log(f.value.username);
     console.log(f.value.password);
     console.log(f.value.role);
    // const loginObserver = {
    //   next: () => console.log('User logged in'),
    //   error: (err: any) => console.log(err)
    // };


    // this.authService.login(f).subscribe(result=>{
    //   if (result) {
        
    //   } else {
    //     this.invalidLogin = true;
    //   }
    // });
    this.authService.setRole(f.value.role);

    if(f.value.role === "Coordinator"){
      this.router.navigate(['/cc/home']);
    }else if(f.value.role === "Faculty"){
      this.router.navigate(['/faculty/home']);
    }else if(f.value.role === "Student"){
      this.router.navigate(['/student/home']);
    }else{
      this.invalidLogin=true;
    }
    //this.router.navigate(['navbar']);
  }







}



// getValues() {
//   return this.http.get("http://localhost:8080/login/name").subscribe(response => {
//     console.log(response);
//     this.values = response;
    
//   }, error => {
//     console.log(error);
//   });
// }}
