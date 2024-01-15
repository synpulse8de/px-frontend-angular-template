import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { KeycloakService } from 'keycloak-angular';
import { LoginService } from '../../services/login.service';

class MockKeycloakService {
    authenticated = false;

    getKeycloakInstance() {
        return {
            authenticated: this.authenticated,
            loadUserProfile: () => new Promise(resolve => resolve({ firstName: 'John', lastName: 'Doe' })),
            logout: () => {}
        };
    }
}

class MockLoginService {
    login() {}
}

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let keycloakService: MockKeycloakService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [HeaderComponent],
            providers: [
                { provide: KeycloakService, useClass: MockKeycloakService },
                { provide: LoginService, useClass: MockLoginService }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;

        keycloakService = TestBed.inject(KeycloakService) as unknown as MockKeycloakService;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('user authentication', () => {
        it('should show the login button when user is not authenticated', () => {
            keycloakService.authenticated = false;
            fixture.detectChanges();

            const signInButton = fixture.nativeElement.querySelector('.button.success');
            expect(signInButton).toBeTruthy();
            expect(signInButton.textContent).toContain('Sign in');
        });

        it('should show the logout button and username when user is authenticated', fakeAsync(() => {
            keycloakService.authenticated = true;
            component.ngOnInit();
            tick();
            fixture.detectChanges();

            const greetingText = fixture.nativeElement.querySelector('span');
            const signOutButton = fixture.nativeElement.querySelector('.button.warn');

            expect(greetingText).toBeTruthy();
            expect(greetingText.textContent).toContain('Hi John Doe !');
            expect(signOutButton).toBeTruthy();
            expect(signOutButton.textContent).toContain('Sign out');
        }));
    });
});
