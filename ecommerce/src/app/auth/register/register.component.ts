import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'bwm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formData: any = {};
  errors: any[] = [];
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }
  register(registerForm) {
    console.log(registerForm.form.value)
    this.auth.register(registerForm.form.value).subscribe(
      () => {
        console.log('success')
        this.router.navigate(['/login',{registered:'success'}])
       },
      (errorResponse) => {
        this.errors = errorResponse.error.errors;
       
      }
    )
   
  }
}
