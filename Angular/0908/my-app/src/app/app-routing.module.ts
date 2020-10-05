import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClockComponent } from './components/clock/clock.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: 'clock', component: ClockComponent },
  { path: 'users', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
