import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { AppModule } from './app.module'

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [AppComponent],
    })
  )

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'Clean NG'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('Clean NG')
  })
})
