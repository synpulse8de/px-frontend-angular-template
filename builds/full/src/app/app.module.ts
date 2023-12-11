import { APP_INITIALIZER,NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { environment } from '../environments/environment'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from './shared/shared.module'
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'
import { SharedFeatureEffects } from './shared/+store/effects/shared-feature.effects'
import { sharedFeature } from './shared/+store/reducers/shared-feature.reducer'
import { ExampleFeature1Module } from './features/example-feature-1/example-feature-1.module'
import { HomeComponent } from './pages/home/home.component'
import { ErrorPageComponent } from './pages/error-page/error-page.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { PieChartComponent } from './pages/home/pie-chart/pie-chart.component'
import { initializeKeycloak } from './authentication/initializeKeycloak.factory'
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular'
import { ENV_CONFIG } from '../assets/utils/keyCloakEnv'
import { KeyCloakHelperService } from "./shared/services/key-cloak-helper.service";

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    NotFoundComponent,
    HomeComponent,
    PieChartComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    KeycloakAngularModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(sharedFeature.name, sharedFeature.reducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([SharedFeatureEffects]),ExampleFeature1Module,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService, KeyCloakHelperService, ENV_CONFIG],
    },
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
