import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {addRandomHeroOnInit, addResources, buyCharacter, levelUpCharacter} from './store.actions';
import {tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppService} from '../app.service';



@Injectable()
export class StoreEffects {
  @Effect({dispatch: false})
  addMoney$ = this.actions$.pipe(
    ofType(addResources),
    tap(() => console.log('addMoney Effect'))
    );

  @Effect({dispatch: false})
  countTeamCP$ = this.actions$.pipe(
    ofType(addRandomHeroOnInit, buyCharacter, levelUpCharacter),
    tap(() => this.appService.countTeamCP())
  );


  constructor(
    private actions$: Actions,
    private store: Store,
    private appService: AppService
  ) {}
}
