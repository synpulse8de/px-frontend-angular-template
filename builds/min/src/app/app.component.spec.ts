import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
    selector: 'app-header',
    template: ''
})
class AppHeaderStubComponent {}

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                AppHeaderStubComponent
            ],
            imports: [
                RouterTestingModule
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
    });

    it('should create the app', () => {
        expect(app).toBeTruthy();
    });

    it(`should have as title 'Pulse8 YourName Frontend'`, () => {
        expect(app.title).toEqual('Pulse8 YourName Frontend');
    });
});
