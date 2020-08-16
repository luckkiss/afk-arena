import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {HeroCardComponent} from './hero-card/hero-card.component';
import {MatIconModule} from '@angular/material/icon';
import {AppRoutingModule} from './app-routing.module';
import {OverviewComponent} from './overview/overview.component';
import {MyTeamComponent} from './my-team/my-team.component';
import {ShopComponent} from './shop/shop.component';
import {StoreModule} from '@ngrx/store';
import {reducer} from './store/store.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HeroCardComponent,
    OverviewComponent,
    MyTeamComponent,
    ShopComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    AppRoutingModule,
    StoreModule.forRoot({store: reducer}),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}