import {Component, Input} from '@angular/core';

import {IPost} from "../../interfaces";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input()
  post:IPost
}
