import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CountComponent } from './count.component'
import { AppModule } from '../../../../app.module.ts'

describe('CountComponent', () => {
  let component: CountComponent
  let fixture: ComponentFixture<CountComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [CountComponent],
    })
    fixture = TestBed.createComponent(CountComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
