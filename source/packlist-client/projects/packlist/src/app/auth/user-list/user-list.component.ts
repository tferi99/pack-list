import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Observable, Subscription} from 'rxjs';
import {User} from '../../shared/entities';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  @Input() users: User[];
  @Input() enableDeletingTrigger: Observable<number>;

  navigationSubs: Subscription;
  deleting = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  ngOnDestroy(): void {
    // avoid memory leaks here by cleaning up after ourselves. If we
    // don't then we will continue to run our initialiseInvites()
    // method on every navigationEnd event.
    if (this.navigationSubs) {
      this.navigationSubs.unsubscribe();
    }
  }

  ngOnInit(): void {
    if (this.enableDeletingTrigger) {
      this.enableDeletingTrigger.subscribe(
        data => this.deleting = false,
        error => this.deleting = false
      );
    }
  }

  delete(u: User): void {
    if (!u) {
      return;
    }
    this.deleting = true;
    this.userService.delete(u.id).subscribe(
      result => {
        this.toastr.warning(`User[${u.id}] deleted.`);
        this.router.navigateByUrl('/user');
      }
    );
  }

}
