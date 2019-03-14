import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public shared: SharedService;
  showTemplate = false;
  title = 'TCS - Transferência de Arquivos de CRM';
  userName: string;
  constructor(private router: Router) {
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


}
