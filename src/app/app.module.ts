// Modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';
import { InputFormContainerComponent } from './containers/input-form-container/input-form-container.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { StatsDisplayContainerComponent } from './containers/stats-display-container/stats-display-container.component';

// Effects
import { InputFormEffects } from 'app/effects/input-form.effects';
import { StatsDisplayEffects } from 'app/effects/stats-display.effects';
import { FetchedDataEffects } from 'app/effects/fetched-data.effects';

// Reducers
import { FetchedDataReducer as fetchedData } from 'app/reducers/fetched-data.reducer';
import { InputFormReducer as inputForm } from 'app/reducers/input-form.reducer';
import { ValidatedInputComponent } from './components/validated-input/validated-input.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormContainerComponent,
    InputFieldComponent,
    StatsDisplayContainerComponent,
    ValidatedInputComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    EffectsModule.run(InputFormEffects),
    EffectsModule.run(FetchedDataEffects),
    EffectsModule.run(StatsDisplayEffects),
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    StoreModule.provideStore({
      fetchedData,
      inputForm
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
