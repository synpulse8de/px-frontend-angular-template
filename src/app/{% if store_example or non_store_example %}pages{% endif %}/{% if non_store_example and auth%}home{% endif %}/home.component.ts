import { Component, OnInit } from '@angular/core'
import { KeycloakService } from 'keycloak-angular'
import { KeycloakProfile } from 'keycloak-js'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false,
})
export class HomeComponent implements OnInit {
    constructor(private keycloakService: KeycloakService) {
    }
    currentUser: KeycloakProfile = {};
    loggedIn = false;

    ngOnInit() {
        this.keycloakService.isLoggedIn().then((state) => {
            this.loggedIn = state;
        })

        this.keycloakService.getKeycloakInstance().loadUserProfile().then((profile) => {
            this.currentUser = profile;
        })
    }
}
