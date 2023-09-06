import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { MockData } from '../../../../shared/models/mock-data.model'
import { Observable, of } from 'rxjs'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import {
  selectEntries,
  selectLoading,
  selectSelectedEntries,
} from '../../+store/selectors/example-feature-1.selectors'
import {
  addDataEntry,
  addSelection,
  loadMockDataEntries,
  removeSelectedEntries,
  removeSelection,
  resetSelectedEntries,
} from '../../+store/actions/example-feature-1.actions'

@Component({
  selector: 'app-my-customers',
  templateUrl: './my-customers.component.html',
  styleUrls: ['./my-customers.component.scss'],
})
export class MyCustomersComponent implements OnInit {
  constructor(private store: Store) {}

  protected entries: MockData[] | undefined = undefined
  protected loadingState$: Observable<boolean> = of(false)

  skeletonPlaceholders: any[] = Array(5).fill({}) // Number of placeholders
  newPersonFormGroup: FormGroup = new FormGroup({})

  private selectedEntries$ = this.store.select(selectSelectedEntries)

  ngOnInit(): void {
    this.newPersonFormGroup = this.buildFormGroup()

    this.store.select(selectEntries).subscribe((entries: MockData[]) => {
      if (entries.length) {
        this.entries = entries
      } else {
        this.store.dispatch(loadMockDataEntries())
      }
    })
    this.loadingState$ = this.store.select(selectLoading)
  }

  protected generateRandomHex(length: number): string {
    const characters: string = '0123456789abcdef'
    let result = ''

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      result += characters.charAt(randomIndex)
    }

    return result
  }

  addCustomer(): void {
    const randomHexValue: string = this.generateRandomHex(24)
    const newUser: MockData = {
      id: randomHexValue,
      name: this.newPersonFormGroup.get('name')?.value,
      age: this.newPersonFormGroup.get('age')?.value,
      email: this.newPersonFormGroup.get('email')?.value,
    }

    this.store.dispatch(addDataEntry({ mockDataEntry: newUser }))
    this.newPersonFormGroup.reset()
    console.log(newUser)
  }

  private buildFormGroup() {
    return new FormGroup({
      id: new FormControl({ value: '', disabled: true }),
      name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    })
  }

  selectionToggle(entry: MockData, $event: MouseEvent) {
    const checked = ($event.target as HTMLInputElement).checked
    if (checked) {
      this.store.dispatch(addSelection({ entryId: entry.id }))
    } else {
      this.store.dispatch(removeSelection({ entryId: entry.id }))
    }
  }

  hasSelection() {
    return this.selectedEntries$
  }

  removeCustomers() {
    this.store.dispatch(removeSelectedEntries())
    this.store.dispatch(resetSelectedEntries())
  }
}
