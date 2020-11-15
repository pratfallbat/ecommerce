
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/auth.guard';
import { AuthService } from './shared/auth.service';
import { TokenInterceptor } from './shared/token-interceptor';


const routes: Routes = [
    { path: 'login', component: LoginComponent ,canActivate:[AuthGuard]},
    { path: 'register', component: RegisterComponent ,canActivate:[AuthGuard]}

]
    
    ;

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        AuthComponent
  
  ],
  imports: [
      RouterModule.forChild(routes),
      FormsModule,
      CommonModule,
      ReactiveFormsModule
  
  ],
    providers: [AuthService,
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi:true
        }
    
    ]
})
export class AuthModule { }
