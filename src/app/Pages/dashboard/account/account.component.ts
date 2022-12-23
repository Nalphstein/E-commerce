import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  public menucollapse = true;
  rawUser = localStorage.getItem('user');
  user = this.rawUser ? JSON.parse(this.rawUser) : '';
  // Rser = localStorage.getItem('type');
  // loser = this.Rser ? JSON.parse(this.Rser) : '';

  constructor() {}

  ngOnInit(): void {
    
    
  }
}
