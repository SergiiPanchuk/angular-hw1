import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {NgForOf} from "@angular/common";

import {UserService} from "../../services";
import {IPost} from "../../interfaces";
import {PostComponent} from "../post/post.component";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    PostComponent,
    NgForOf
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{
  posts:IPost[]

  @Input()
  userId: number

  constructor(private postService:UserService) {
  }

  ngOnInit(): void {
    this.loadUserPosts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userId']) {
      this.loadUserPosts();
    }
  }

  private loadUserPosts(): void {
    this.postService.getUserPosts(this.userId).subscribe(value => {
      this.posts = value;
    });
  }
}
