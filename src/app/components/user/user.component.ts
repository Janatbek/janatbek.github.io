import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: any;
  /**
   *
   */
  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    (this.githubService.user as Observable<User>).subscribe((user) => {
      this.user = user;
    });
  }
}
