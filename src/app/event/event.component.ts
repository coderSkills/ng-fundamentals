import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../shared/user-details.service';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  public event: any;

  constructor(private userDetailsService: UserDetailsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.userDetailsService.getUser(this.activatedRoute.snapshot.params['id']);
  }

}
