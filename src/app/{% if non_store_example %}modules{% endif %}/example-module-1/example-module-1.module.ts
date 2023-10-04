import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Ex1BasePageComponent } from './pages/ex1-base-page/ex1-base-page.component'
import { CountComponent } from './components/count/count.component'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { MyCustomersComponent } from './components/my-customers/my-customers.component'
import { PieChartShowcaseComponent } from './components/pie-chart-showcase/pie-chart-showcase.component'
import { ExampleModule1RoutingModule } from './example-module-1-routing.module'
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  declarations: [
    Ex1BasePageComponent,
    CountComponent,
    MyCustomersComponent,
    PieChartShowcaseComponent,
  ],
  imports: [
    CommonModule,
    ExampleModule1RoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [],
})
export class ExampleModule1Module {}
