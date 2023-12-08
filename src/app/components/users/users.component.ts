import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

import {UserService} from "../../services";
import {IUser} from "../../interfaces";
import {UserComponent} from "../user/user.component";
import {PostsComponent} from "../posts/posts.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserComponent,
    NgForOf,
    PostsComponent,
    NgIf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: IUser[]
  userId: number;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value)
  }

  getUserId(userId: number) {
    this.userId = userId
  }
}
