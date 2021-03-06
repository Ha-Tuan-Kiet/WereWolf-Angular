import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamePlayComponent } from './game-play.component';

const routes: Routes = [{ path: '', component: GamePlayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamePlayRoutingModule { }
