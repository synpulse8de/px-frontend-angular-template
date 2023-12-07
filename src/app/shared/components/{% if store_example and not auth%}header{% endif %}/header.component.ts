import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {
  }
  
  ngOnInit(): void {
  }
  
  protected isLoggedIn(): boolean | undefined {
    return
  }

  protected login(): void {
  }

  protected getUser(): string {
    return ''
  }

  protected logout(): void {
  }
}
