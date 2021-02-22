import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/entities';
import {Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.scss']
})
export class UserMainComponent implements OnInit {
  users: User[];
  deleteEnable = new Subject<number>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.users = this.route.snapshot.data.persons as User[];
    this.route.data.subscribe(
      (data)  => {
        this.users = data.users;
        this.deleteEnable.next(0);      // send signal to child to enable delete buttons
      }
    );
  }

}
