import { Component, OnInit } from '@angular/core';
import { SharedService } from './services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showTemplate = false;
  public shared: SharedService;
  userName: string = '';

  constructor( private router: Router) {
    this.shared = SharedService.getInstace();

  }

  ngOnInit() {
    this.shared.showTemplate.subscribe(
      show => { this.showTemplate = show;
                if (this.showTemplate) {
                  this.userName = this.shared.user.id;
                }
               }
    );


  }

  logout() {
    this.showTemplate = false;
    this.router.navigate(['/login']);
    return true;
  }
}
