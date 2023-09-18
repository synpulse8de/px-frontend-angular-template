import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Ex1BasePageComponent } from './pages/ex1-base-page/ex1-base-page.component'
import { ExampleFeature1RoutingModule } from './example-feature-1-routing.module'
import { CountComponent } from './components/count/count.component'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { ExampleFeature1Effects } from './+store/effects/example-feature-1.effects'
import {
  EXAMPLE_FEATURE_1_FEATURE_KEY,
  exampleFeature1Reducer,
} from './+store/reducers/example-feature-1.reducer'
import { HttpClientModule } from '@angular/common/http'
import { LoadingSpinnerComponent } from '../../shared/component/loading-spinner/loading-spinner.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MyCustomersComponent } from './components/my-customers/my-customers.component'
import { PieChartShowcaseComponent } from './components/pie-chart-showcase/pie-chart-showcase.component'

@NgModule({
  declarations: [
    Ex1BasePageComponent,
    CountComponent,
    LoadingSpinnerComponent,
    MyCustomersComponent,
    PieChartShowcaseComponent,
  ],
  imports: [
    CommonModule,
    ExampleFeature1RoutingModule,
    HttpClientModule,
    StoreModule.forFeature(
      EXAMPLE_FEATURE_1_FEATURE_KEY,
      exampleFeature1Reducer
    ),
    EffectsModule.forFeature([ExampleFeature1Effects]),
    ReactiveFormsModule,
  ],
  exports: [LoadingSpinnerComponent],
})
export class ExampleFeature1Module {}
