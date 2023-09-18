import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute, Params } from '@angular/router'
import { ErrorPageComponent } from './error-page.component'
import { of } from 'rxjs'

/**
 * This suite of tests is for the `ErrorPageComponent`.
 * The component displays error messages based on the parameters from the router.
 * The tests are designed to ensure that the error messages are correctly displayed.
 */
describe('ErrorPageComponent', () => {
  let component: ErrorPageComponent
  let fixture: ComponentFixture<ErrorPageComponent>
  let mockActivatedRoute: any

  /**
   * This block is executed before each test case.
   * It sets up the testing environment, mocks, and initializes the component to be tested.
   */
  beforeEach(async () => {
    // Mocking the `ActivatedRoute` service to provide custom query parameters.
    mockActivatedRoute = {
      queryParams: of({}), // Initialize with empty parameters; can be overridden in specific tests.
    }

    // Setting up Angular's testing module with the necessary declarations and providers.
    await TestBed.configureTestingModule({
      declarations: [ErrorPageComponent],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
    }).compileComponents()

    // Creating an instance of the component and its wrapper fixture.
    fixture = TestBed.createComponent(ErrorPageComponent)
    component = fixture.componentInstance

    // Triggering Angular's change detection to update the view.
    fixture.detectChanges()
  })

  /**
   * Basic sanity test to verify that the component instance was successfully created.
   */
  it('should create', () => {
    expect(component).toBeTruthy()
  })

  /**
   * This test ensures that the component initializes with the default error values,
   * especially when no error parameters are provided.
   */
  it('should initialize with default error values', () => {
    expect(component.errorInfo.code).toBe('Unknown')
    expect(component.errorInfo.type).toBe('Unknown')
    expect(component.errorInfo.message).toBe('An unknown error occurred.')
  })

  /**
   * This test checks that the component updates its error values based on the provided query parameters.
   * It simulates a scenario where the router provides specific error details.
   */
  it('should update error values based on queryParams', () => {
    const mockErrorParams: Params = {
      code: '404',
      type: 'NotFound',
      message: 'The requested resource was not found.',
    }

    // Update the mock to provide our custom error parameters.
    mockActivatedRoute.queryParams = of(mockErrorParams)

    // Call the initialization logic again to process the new parameters.
    component.ngOnInit()

    // Update the view with the new component state.
    fixture.detectChanges()

    // Assert that the component's error information matches the provided parameters.
    expect(component.errorInfo.code).toBe('404')
    expect(component.errorInfo.type).toBe('NotFound')
    expect(component.errorInfo.message).toBe(
      'The requested resource was not found.'
    )
  })
})
