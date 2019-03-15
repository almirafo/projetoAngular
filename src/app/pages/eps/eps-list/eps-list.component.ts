import { Component, OnInit } from '@angular/core';
import { Eps } from 'src/app/model/eps.model';
import { EpsService } from 'src/app/services/eps.service';


@Component({
  selector: 'app-eps-list',
  templateUrl: './eps-list.component.html',
  styleUrls: ['./eps-list.component.css']
})
export class EpsListComponent implements OnInit {


  corAtivo = { color : '#28a745'};
  corInativo = {color: '#ce0000'};

  epsList: Eps [ ];

  constructor(private epsService: EpsService) { }

  ngOnInit() {
    this.epsService.list().subscribe(
      data => this.epsList = data
    );

  }

  changeStyle(status) {
    if (status === 'A') {
      return this.corAtivo;
    } else {
      return this.corInativo;
    }
  }
}
