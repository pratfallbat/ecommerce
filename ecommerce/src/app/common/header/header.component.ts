import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/shared/auth.service';

@Component({
  selector: 'bwn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }

  logout() {
    console.log(this.auth.getUsername())
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
