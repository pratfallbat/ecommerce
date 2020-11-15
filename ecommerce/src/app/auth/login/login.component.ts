import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'bwm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errors: any[] = [];
  notifyMessage: string = '';

  constructor(private fb: FormBuilder, private auth: AuthService,
    private router: Router,private aroute:ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
    this.aroute.params.subscribe(
      (params) => {
        if (params['registered'] == 'success') {
        
          this.notifyMessage='You have been successfully registered. You can login now'
        }
      }
    )
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,
      Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      password: ['', Validators.required]
    });
    
  }

  isInvalidForm(fieldName):boolean {
    return this.loginForm.controls[fieldName].invalid &&
      (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
  }

  isRequired(fieldName):boolean {
  return  this.loginForm.controls[fieldName].errors.required;
  }
  emailPattern(fieldName):boolean {
    
    return this.loginForm.controls[fieldName].errors.pattern;
  }

  login() {
    console.log(this.loginForm.value)
    this.auth.login(this.loginForm.value).subscribe(

      () => { this.router.navigate(['/rentals'])},
      (errorResponse) => {
        this.errors=errorResponse.error.errors;
        
      }
    )
  }

}
