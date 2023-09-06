import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { Ex2BasePageComponent } from './pages/ex2-base-page/ex2-base-page.component'

const routes: Routes = [
  {
    path: '',
    component: Ex2BasePageComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleFeature2RoutingModule {}
