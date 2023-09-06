import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ErrorPageComponent } from './pages/error-page/error-page.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { AuthGuard } from './authentication/auth-guard'

const routes: Routes = [
  {
    path: 'lazy_1',
    loadChildren: () =>
      import('./features/example-feature-1/example-feature-1.module').then(
        (m) => m.ExampleFeature1Module
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'lazy_2',
    loadChildren: () =>
      import('./features/example-feature-2/example-feature-2.module').then(
        (m) => m.ExampleFeature2Module
      ),
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
