import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { SelectDirective } from './directives/select.directive';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ThemeModule } from './modules/theme/theme.module';
import { HomeComponent } from './pages/home/home.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MaterialModule } from './modules/material/material.module';

@NgModule({
  // load "html" class
  declarations: [
    AppComponent,
    ExponentialStrengthPipe, // => @Pipe({ standalone: false }}
    SelectDirective, HomeComponent, GetStartedComponent, NotFoundComponent
  ],
  // load modules
  imports: [
    BrowserModule, // => CommonModule exports
    AppRoutingModule,
    // ExponentialStrengthPipe // => @Pipe({ standalone: true }} = like a mini module
    ThemeModule,
    MaterialModule
  ],
  // public features, just FYI (sample)
  exports: [
    // ExponentialStrengthPipe,
    // AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
