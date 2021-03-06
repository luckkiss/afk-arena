import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {HeroService} from './hero-card/hero.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // tslint:disable:variable-name

  store$: Observable<any>;
  private _currentStageSource = new BehaviorSubject(1);
  currentStage$ = this._currentStageSource.asObservable();
  private _teamCPSource = new BehaviorSubject(0);
  teamCP$ = this._teamCPSource.asObservable();

  constructor(private store: Store<any>, private heroService: HeroService) {
  }

  countTeamCP() {
    this.store$ = this.store.pipe(select('store', 'heroesList'));
    let amount = 0;

    const sub = this.store$.pipe(map(heroesList => {
      const obj = {};

      for (const hero in heroesList) {
        if (heroesList.hasOwnProperty(hero)) {
          if (heroesList[hero].obtained) {
            obj[hero] = heroesList[hero];
          }
        }
      }

      return obj;
    })).subscribe(data => {
      for (const hero in data) {
        if (data.hasOwnProperty(hero)) {
          amount += this.heroService.getCurrentCP(data[hero]);
        }
      }
    });

    sub.unsubscribe();

    this._teamCPSource.next(amount);
  }

  advancePlayerToNextStage(stage) {
    this._currentStageSource.next(stage);
  }
}
