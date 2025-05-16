import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { ExampleFeature1State } from '../../+store/reducers/example-feature-1.reducer';
import { CountComponent } from './count.component'

describe('CountComponent', () => {
  let component: CountComponent;
  let fixture: ComponentFixture<CountComponent>;
  const initialState: ExampleFeature1State = {
    count: 0,
    loading: false,
    entries: [],
    selectedEntries: [],
    error: null,
    loadingStates: {
      initLoading: false,
      changeUserDataLoading: false,
    }
  }
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [
        provideMockStore({ initialState })
      ]
    });
    
    fixture = TestBed.createComponent(CountComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });
  
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
