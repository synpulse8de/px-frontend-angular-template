import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { HomeComponent } from './home.component'
import { selectCurrentUser, selectLogin, } from '../../shared/+store/selectors/shared-feature.selectors'
import { checkLoginStateActions, setKeycloakUserActions, } from '../../shared/+store/actions/shared-feature.actions'
import { KeycloakProfile } from 'keycloak-js'
import { ReactiveFormsModule } from "@angular/forms";
import { InjectionToken } from "@angular/core";
import { KeyCloakEnv } from "../../../assets/utils/keyCloakEnv";
import { PieChartComponent } from "./pie-chart/pie-chart.component";


const mockKeycloakEnvConfig = {
    "KEYCLOAK_URL": "https://keycloak.pulse8.synpulse8.com",
    "KEYCLOAK_CLIENT_ID": "angular-client-test",
    "KEYCLOAK_REALM": "pulse8_wealth_cockpit"
};
const ENV_CONFIG = new InjectionToken<KeyCloakEnv>('Keycloak Environment Configuration');


/**
 * This test suite focuses on the `HomeComponent`.
 * `HomeComponent` is presumably the main landing or dashboard page of the application.
 * The tests aim to ensure the correct interaction with the NgRx store, particularly
 * regarding user authentication and profile information.
 */
describe('HomeComponent', () => {
    let component: HomeComponent
    let fixture: ComponentFixture<HomeComponent>
    let store: MockStore
    const initialState = {} // Define an initial state for the mock store if necessary.
    
    /**
     * This block runs before each test.
     * It sets up the testing environment, initializes the component, and sets up a mock store.
     */
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HomeComponent, PieChartComponent],
            imports: [ReactiveFormsModule],
            providers: [
                provideMockStore({ initialState }),
                { provide: ENV_CONFIG, useValue: mockKeycloakEnvConfig }
            ],
        }).compileComponents()
        
        // Retrieve the mock store instance.
        store = TestBed.inject(MockStore)
        fixture = TestBed.createComponent(HomeComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })
    
    /**
     * Basic test to ensure the component instance is created successfully.
     */
    it('should create', () => {
        expect(component).toBeTruthy()
    })
    
    /**
     * Test to ensure that the component dispatches a check for the Keycloak login state upon initialization.
     */
    it('should dispatch checkKeycloakLoginState on init', () => {
        const spy = spyOn(store, 'dispatch')
        component.ngOnInit()
        expect(spy).toHaveBeenCalledWith(
            checkLoginStateActions.checkKeycloakLoginState()
        )
    })
    
    /**
     * Test to ensure that the component dispatches an action to set the Keycloak user upon initialization.
     */
    it('should dispatch setKeycloakUser on init', () => {
        const spy = spyOn(store, 'dispatch')
        component.ngOnInit()
        expect(spy).toHaveBeenCalledWith(setKeycloakUserActions.setKeycloakUser())
    })
    
    /**
     * Test to check if the component correctly selects the current user from the store.
     */
    it('should select current user', () => {
        const mockCurrentUser: KeycloakProfile = {
            firstName: 'John',
            lastName: 'Doe',
        }
        store.overrideSelector(selectCurrentUser, mockCurrentUser)
        component.currentUser$.subscribe((user) => {
            expect(user).toEqual(mockCurrentUser)
        })
    })
    
    /**
     * Test to verify if the component selects the correct login state from the store.
     */
    it('should select login state', () => {
        const mockLoginState = true
        store.overrideSelector(selectLogin, mockLoginState)
        component.loggedIn$.subscribe((loggedIn) => {
            expect(loggedIn).toBe(mockLoginState)
        })
    })
})
