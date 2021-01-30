import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { MatToolbarModule } from '@angular/material/toolbar/toolbar-module';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }
  role:any;
  isAdmin:boolean=false;
  isFaculty:boolean=false;
  isStudent:boolean=false;
  invalidLogin:boolean=false;
  ngOnInit(): void {
    
    $(document).ready(function () {
    
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });


      $("a").attr("aria-expanded","true");


     });
    }
}
