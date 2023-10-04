import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MyCustomersComponent } from './my-customers.component'

describe('MyCustomersComponent', () => {
  let component: MyCustomersComponent
  let fixture: ComponentFixture<MyCustomersComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCustomersComponent],
    })
    fixture = TestBed.createComponent(MyCustomersComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
