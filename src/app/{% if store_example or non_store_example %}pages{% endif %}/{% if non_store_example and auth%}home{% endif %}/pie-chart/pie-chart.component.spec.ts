import { ComponentFixture, TestBed } from '@angular/core/testing'
import { PieChartComponent } from './pie-chart.component'
import { AppModule } from '../../../app.module'
import { ENV_CONFIG } from '../../../../assets/utils/p8env'

describe('PieChartComponent', () => {
  let component: PieChartComponent
  let fixture: ComponentFixture<PieChartComponent>
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [PieChartComponent],
      providers: [
        { provide: ENV_CONFIG, useValue: {} },
      ],
    })
    fixture = TestBed.createComponent(PieChartComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })
  
  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
