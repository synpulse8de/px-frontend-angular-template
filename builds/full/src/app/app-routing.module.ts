import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
//import { AuthGuard } from './authentication/auth-guard'
import { ErrorPageComponent } from './pages/error-page/error-page.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { HomeComponent } from './pages/home/home.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [],
  },
  {
    path: 'lazy-zone',
    children: [
      {
        path: 'lazy_1',
        loadChildren: () =>
          import('./features/example-feature-1/example-feature-1.module').then(
            (m) => m.ExampleFeature1Module
          ),
        //canActivate: [AuthGuard],
        // remove comment if you want to test the auth guard, currently commented because cypress doesn't really support keycloak with sso. Which in turn breaks the tests
        
      },
      
    ],
  },

  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: 'error',
    component: ErrorPageComponent,
    canActivate: [],
  },
  {
    path: '**', // Catch-all route for unknown paths
    redirectTo: '/not-found', // Redirect to the not-found page
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
