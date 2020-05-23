import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../shared/user-details.service'

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  public events: any;

  constructor(private userDetailsService: UserDetailsService) { }

  ngOnInit() {
    this.events = this.userDetailsService.getUsers();
  }

}
