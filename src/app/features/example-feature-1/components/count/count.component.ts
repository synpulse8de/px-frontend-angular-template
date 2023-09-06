import { Component } from '@angular/core'
import { ExampleFeature1State } from '../../+store/reducers/example-feature-1.reducer'
import { Store } from '@ngrx/store'
import {
  decrement,
  increment,
} from '../../+store/actions/example-feature-1.actions'

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
})
export class CountComponent {
  count$ = this.store.select((state) => state.count)

  constructor(private store: Store<ExampleFeature1State>) {}

  onIncrement() {
    this.store.dispatch(increment())
  }

  onDecrement() {
    this.store.dispatch(decrement())
  }
}
