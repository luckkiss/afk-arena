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
import {BottomBarComponent} from './components/bottom-bar/bottom-bar.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MissionComponent} from './mission/mission.component';
import {AppService} from './app.service';
import {EffectsModule} from '@ngrx/effects';
import {StoreEffects} from './store/store.effects';
import {AscensionBadgeComponent} from './components/ascension-badge/ascension-badge.component';
import {MissionService} from './mission/mission.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroCardComponent,
    OverviewComponent,
    MyTeamComponent,
    ShopComponent,
    BottomBarComponent,
    MissionComponent,
    AscensionBadgeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    AppRoutingModule,
    StoreModule.forRoot({store: reducer}),
    EffectsModule.forRoot([StoreEffects]),
    // StoreDevtoolsModule.instrument({maxAge: 25}),
    MatTabsModule,
    MatMenuModule
  ],
  providers: [AppService, MissionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
