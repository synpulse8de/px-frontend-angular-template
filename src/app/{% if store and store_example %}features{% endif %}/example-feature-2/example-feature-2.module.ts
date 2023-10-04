import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import * as fromExampleFeature2 from './+store/reducers/example-feature-2.reducer'
import { EffectsModule } from '@ngrx/effects'
import { ExampleFeature2Effects } from './+store/effects/example-feature-2.effects'
import { Ex2BasePageComponent } from './pages/ex2-base-page/ex2-base-page.component'
import { ExampleFeature2RoutingModule } from './example-feature-2-routing.module'

@NgModule({
  declarations: [Ex2BasePageComponent],
  imports: [
    CommonModule,
    ExampleFeature2RoutingModule,
    StoreModule.forFeature(
      fromExampleFeature2.exampleFeature2sFeatureKey,
      fromExampleFeature2.reducer
    ),
    EffectsModule.forFeature([ExampleFeature2Effects]),
  ],
})
export class ExampleFeature2Module {}
