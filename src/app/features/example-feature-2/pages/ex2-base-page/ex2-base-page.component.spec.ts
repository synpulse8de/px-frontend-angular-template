import { ComponentFixture, TestBed } from '@angular/core/testing'

import { Ex2BasePageComponent } from './ex2-base-page.component'

describe('Ex2BasePageComponent', () => {
  let component: Ex2BasePageComponent
  let fixture: ComponentFixture<Ex2BasePageComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex2BasePageComponent],
    })
    fixture = TestBed.createComponent(Ex2BasePageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
