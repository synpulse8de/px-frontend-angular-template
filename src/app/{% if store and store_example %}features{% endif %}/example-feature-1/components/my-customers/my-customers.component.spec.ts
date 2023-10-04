import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Store } from '@ngrx/store'
import { MyCustomersComponent } from './my-customers.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MockData } from '../../../../shared/models/mock-data.model'
import {
  addSelection,
  loadMockDataEntriesActions,
  removeSelectedEntries,
  resetSelectedEntries,
} from '../../+store/actions/example-feature-1.actions'
import {
  selectChangeUserDataLoadingState,
  selectInitLoadingState,
} from '../../+store/selectors/example-feature-1-loading.selectors'
import { of } from 'rxjs'
import {
  selectEntries,
  selectSelectedEntries,
} from '../../+store/selectors/example-feature-1.selectors'

/**
 * Test suite for `MyCustomersComponent`.
 * This component allows users to manage a list of customers.
 * The tests aim to ensure the correct interaction with the NgRx store,
 * especially regarding customer data manipulation and state selections.
 */
describe('MyCustomersComponent', () => {
  let component: MyCustomersComponent
  let fixture: ComponentFixture<MyCustomersComponent>
  let store: jasmine.SpyObj<Store>

  // Mocks for data and loading state selections from the store.
  const mockSelectEntries = of([])
  const mockSelectSelectedEntries = of([])
  const mockSelectInitLoadingState = of(false)
  const mockSelectChangeUserDataLoadingState = of(false)

  /**
   * Setup block for each test.
   * It initializes the component and mocks the store with predefined data and loading states.
   */
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [MyCustomersComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: Store,
          useValue: {
            dispatch: jasmine.createSpy('dispatch'),
            select: jasmine.createSpy().and.callFake((selector: any) => {
              if (selector === selectEntries) {
                return mockSelectEntries
              }
              if (selector === selectSelectedEntries) {
                return mockSelectSelectedEntries
              }
              if (selector === selectInitLoadingState) {
                return mockSelectInitLoadingState
              }
              if (selector === selectChangeUserDataLoadingState) {
                return mockSelectChangeUserDataLoadingState
              }
              return null
            }),
          },
        },
      ],
    })

    await TestBed.compileComponents()

    store = TestBed.inject(Store) as jasmine.SpyObj<Store>

    fixture = TestBed.createComponent(MyCustomersComponent)
    component = fixture.componentInstance
  })

  /**
   * Test to verify if the component initializes correctly
   * and dispatches an action to load mock data entries.
   */
  it('should initialize correctly', () => {
    component.ngOnInit()
    expect(store.dispatch).toHaveBeenCalledWith(
      loadMockDataEntriesActions.loadMockDataEntries()
    )
  })

  /**
   * Test to verify if the component generates a random hex value of a given length.
   */
  it('should correctly generate a random hex', () => {
    const length = 5
    const result = component.generateRandomHex(length)
    expect(result.length).toBe(length)
  })

  /**
   * Test to confirm if the component adds a new customer entry to the store.
   */
  it('should correctly add a new customer', () => {
    component.ngOnInit()

    const newUser: MockData = {
      id: '',
      name: 'John Doe',
      age: 30,
      email: 'john.doe@example.com',
    }

    component.newPersonFormGroup.setValue(newUser)

    component.addCustomer()
    expect(store.dispatch).toHaveBeenCalledWith(
      jasmine.objectContaining({
        type: '[Example Feature 1] Add Data Entry',
        mockDataEntry: jasmine.objectContaining({
          id: jasmine.any(String),
          name: 'John Doe',
          age: 30,
          email: 'john.doe@example.com',
        }),
      })
    )
  })

  /**
   * Test to verify if the component dispatches the correct action to toggle a customer's selection state.
   */
  it('should toggle selection correctly', () => {
    const mockEntry: MockData = {
      id: '',
      name: 'John Doe',
      age: 30,
      email: 'john.doe@example.com',
    }

    const mockEvent = { target: { checked: true } } as unknown as MouseEvent
    component.selectionToggle(mockEntry, mockEvent)
    expect(store.dispatch).toHaveBeenCalledWith(
      addSelection({ entryId: mockEntry.id })
    )
  })

  /**
   * Test to confirm if the component dispatches the correct actions to remove selected customers.
   */
  it('should remove selected customers correctly', () => {
    component.removeCustomers()
    expect(store.dispatch).toHaveBeenCalledWith(removeSelectedEntries())
    expect(store.dispatch).toHaveBeenCalledWith(resetSelectedEntries())
  })
})
