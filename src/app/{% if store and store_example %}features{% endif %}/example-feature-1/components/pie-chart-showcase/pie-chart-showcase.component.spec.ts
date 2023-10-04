import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PieChartShowcaseComponent } from './pie-chart-showcase.component'
import { provideMockStore } from '@ngrx/store/testing'
import { initialState } from '../../../../shared/+store/reducers/shared-feature.reducer'

describe('PieChartShowcaseComponent', () => {
  let component: PieChartShowcaseComponent
  let fixture: ComponentFixture<PieChartShowcaseComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieChartShowcaseComponent],
      providers: [provideMockStore({ initialState })],
    })
    fixture = TestBed.createComponent(PieChartShowcaseComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
