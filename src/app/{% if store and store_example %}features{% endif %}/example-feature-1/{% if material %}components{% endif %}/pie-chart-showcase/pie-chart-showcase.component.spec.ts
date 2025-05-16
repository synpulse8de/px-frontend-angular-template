import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PieChartShowcaseComponent } from './pie-chart-showcase.component'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { selectPieChartValue } from '../../../../shared/+store/selectors/shared-feature.selectors'
import { provideRouter } from '@angular/router'

describe('PieChartShowcaseComponent', () => {
  let component: PieChartShowcaseComponent
  let fixture: ComponentFixture<PieChartShowcaseComponent>
  let store: MockStore
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieChartShowcaseComponent],
      providers: [
        provideMockStore({
          initialState: {},
        }),
        provideRouter([])
      ],
    })
      .compileComponents()
    
    store = TestBed.inject(MockStore)
    fixture = TestBed.createComponent(PieChartShowcaseComponent)
    component = fixture.componentInstance
    
    // (Optional) if you want selectPieChartValue to return a specific value:
    store.overrideSelector(selectPieChartValue, 123)
    
    fixture.detectChanges()
  })
  
  it('should create', () => {
    expect(component).toBeTruthy()
  })
  
  it('should expose pieChartValue$ from the store', (done) => {
    component.pieChartValue$.subscribe(val => {
      expect(val).toBe(123)
      done()
    })
  })
})
