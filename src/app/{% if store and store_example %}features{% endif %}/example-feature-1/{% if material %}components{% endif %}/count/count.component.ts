import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { selectCount } from '../../+store/selectors/example-feature-1.selectors'
import { Store } from '@ngrx/store'
import { ExampleFeature1State } from '../../+store/reducers/example-feature-1.reducer'
import { decrement, increment } from '../../+store/actions/example-feature-1.actions'
import { MatCard, MatCardActions, MatCardContent, MatCardHeader } from '@angular/material/card'
import { AsyncPipe } from '@angular/common'
import { MatButton } from '@angular/material/button'

@Component({
  selector: 'app-count',
  imports: [
    MatCard,
    AsyncPipe,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatButton,
  ],
  templateUrl: './count.component.html',
  styleUrl: './count.component.scss',
  standalone: true,
})
export class CountComponent {
  count$: Observable<number> = this.store.select(selectCount)
  
  constructor(private store: Store<ExampleFeature1State>) {
  }
  
  public onIncrement(): void {
    this.store.dispatch(increment())
  }
  
  public onDecrement(): void {
    this.store.dispatch(decrement())
  }
}
