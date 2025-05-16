import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PieChartComponent } from './pie-chart.component'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { selectPieChartValue } from '../../../shared/+store/selectors/shared-feature.selectors'
import { changePieChartValue } from '../../../shared/+store/actions/shared-feature.actions'

describe('PieChartComponent', () => {
  let component: PieChartComponent
  let fixture: ComponentFixture<PieChartComponent>
  let store: MockStore
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PieChartComponent,
      ],
      providers: [
        provideMockStore({
          selectors: [
            { selector: selectPieChartValue, value: 42 },
          ],
        }),
      ],
    }).compileComponents()
    
    store = TestBed.inject(MockStore)
    fixture = TestBed.createComponent(PieChartComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })
  
  it('should create', () => {
    expect(component).toBeTruthy()
  })
  
  it('should dispatch changePieChartValue when form changes', (done) => {
    spyOn(store, 'dispatch')
    component.pieFormGroup.get('percentageInput')!.setValue(17)
    setTimeout(() => {
      expect(store.dispatch).toHaveBeenCalledWith(
        changePieChartValue({ pieChartValue: 17 }),
      )
      done()
    }, 150)
  })
})
