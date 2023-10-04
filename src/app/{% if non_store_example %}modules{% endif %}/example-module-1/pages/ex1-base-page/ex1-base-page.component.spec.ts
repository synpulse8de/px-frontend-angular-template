import { ComponentFixture, TestBed } from '@angular/core/testing'

import { Ex1BasePageComponent } from './ex1-base-page.component'

describe('Ex1BasePageComponent', () => {
  let component: Ex1BasePageComponent
  let fixture: ComponentFixture<Ex1BasePageComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex1BasePageComponent],
    })
    fixture = TestBed.createComponent(Ex1BasePageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
