import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { Ex1BasePageComponent } from './pages/ex1-base-page/ex1-base-page.component'

const routes: Routes = [
  {
    path: '',
    component: Ex1BasePageComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleModule1RoutingModule {}
