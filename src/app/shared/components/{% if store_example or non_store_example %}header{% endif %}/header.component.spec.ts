import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HeaderComponent } from './header.component'
import { AppModule } from '../../../app.module.ts'

/**
 * This test suite focuses on the `HeaderComponent`.
 * `HeaderComponent` is presumably a top section of the application that might contain navigation links, branding, etc.
 * The tests here ensure that the component initializes correctly within the context of the main application module.
 */
describe('HeaderComponent', () => {
  // Variables to hold our component instance and its testing counterpart.
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  /**
   * This block runs before each test.
   * It sets up the testing environment, and initializes the component to be tested.
   */
  beforeEach(() => {
    // Setting up Angular's test module.
    // We're importing the whole `AppModule` which means our component is tested in a more integrated fashion.
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [HeaderComponent],
    })

    // Create a component instance and its fixture.
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance

    // Trigger Angular change detection to reflect any data-bound properties.
    fixture.detectChanges()
  })

  /**
   * Basic test to verify that the component instance gets created successfully.
   */
  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
