import { Component } from '@angular/core'
import { ExampleFeature1State } from '../../+store/reducers/example-feature-1.reducer'
import { Store } from '@ngrx/store'
import {
  decrement,
  increment,
} from '../../+store/actions/example-feature-1.actions'
import { selectCount } from '../../+store/selectors/example-feature-1.selectors'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
})
export class CountComponent {
  count$: Observable<number> = this.store.select(selectCount)

  constructor(private store: Store<ExampleFeature1State>) {}

  public onIncrement(): void {
    this.store.dispatch(increment())
  }

  public onDecrement(): void {
    this.store.dispatch(decrement())
  }
}
