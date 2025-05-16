import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { selectCurrentUser, selectLogin } from '../../shared/+store/selectors/shared-feature.selectors'
import { checkLoginStateActions, setKeycloakUserActions } from '../../shared/+store/actions/shared-feature.actions'
import { AsyncPipe, NgIf } from '@angular/common'
import { PieChartComponent } from './pie-chart/pie-chart.component'

@Component({
  selector: 'app-home',
  imports: [
    AsyncPipe,
    NgIf,
    PieChartComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {
  constructor(private store: Store) {
  }
  
  currentUser$ = this.store.select(selectCurrentUser)
  loggedIn$ = this.store.select(selectLogin)
  
  ngOnInit() {
    this.store.dispatch(checkLoginStateActions.checkKeycloakLoginState())
    this.store.dispatch(setKeycloakUserActions.setKeycloakUser())
  }
}
