import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from './shared/shared.module'
import { HttpClientModule } from '@angular/common/http'






@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    
    
    
    
    
    
  ],
  
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
