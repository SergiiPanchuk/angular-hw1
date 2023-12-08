import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IPost, IUser} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users.base)
  }

  getUserPosts(id: number): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.users.postsById(id))
  }
}
