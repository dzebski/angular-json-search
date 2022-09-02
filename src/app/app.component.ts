import { filter, map, Observable } from 'rxjs';
import { User } from './interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import data from '../assets/user-data.json'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: User[]
  FC: FormControl
  filtered!: Observable<User[]>

  constructor(private _http: HttpClient) {
    this.users = data
    this.FC = new FormControl('')
  }

  ngOnInit(): void {
    this.filtered = this.FC.valueChanges
      .pipe(
        map(value => this._filter(value || ''))
      )
  }

  private _filter(value: string): User[] {
    const filterValue = value.toLowerCase()
    return this.users
      .filter(user =>
        user.name.toLowerCase().includes(filterValue) ||
        user.surename.toLowerCase().includes(filterValue) ||
        user.email.toLowerCase().includes(filterValue)
      )
  }
}
