import { APP_INITIALIZER, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { HeaderComponent } from './shared/component/header/header.component'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { HttpClientModule } from '@angular/common/http'
import { ErrorPageComponent } from './pages/error-page/error-page.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { initializeKeycloak } from './authentication/initializeKeycloak.factory'
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular'
import { HomeComponent } from './pages/home/home.component'
import { PieChartComponent } from './pages/home/pie-chart/pie-chart.component'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedFeatureEffects } from './shared/+store/effects/shared-feature.effects'
import { sharedFeature } from './shared/+store/reducers/shared-feature.reducer'
import { ExampleFeature1Module } from './features/example-feature-1/example-feature-1.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorPageComponent,
    NotFoundComponent,
    HomeComponent,
    PieChartComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    KeycloakAngularModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(sharedFeature.name, sharedFeature.reducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([SharedFeatureEffects]),
    ReactiveFormsModule,
    ExampleFeature1Module,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
