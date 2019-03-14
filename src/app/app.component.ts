import { Component, OnInit } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showTemplate = false;
  public shared: SharedService;

  constructor( ) {
    this.shared = SharedService.getInstace();

  }

  ngOnInit() {
    this.shared.showTemplate.subscribe(
      show => this.showTemplate = show
    );
    this.showTemplate = this.shared.isLogged();
  }
}
