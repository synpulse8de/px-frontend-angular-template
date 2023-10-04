import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import {
  checkLoginStateActions,
  setKeycloakUserActions,
} from '../../shared/+store/actions/shared-feature.actions'
import {
  selectCurrentUser,
  selectLogin,
} from '../../shared/+store/selectors/shared-feature.selectors'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {}

  currentUser$ = this.store.select(selectCurrentUser)
  loggedIn$ = this.store.select(selectLogin)

  ngOnInit() {
    this.store.dispatch(checkLoginStateActions.checkKeycloakLoginState())
    this.store.dispatch(setKeycloakUserActions.setKeycloakUser())
  }
}
