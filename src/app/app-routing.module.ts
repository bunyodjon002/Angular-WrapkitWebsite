import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { WrapsComponent } from './wraps/wraps.component';

const routes: Routes = [
  { path: '' , redirectTo:'home', pathMatch:'full'},
  {path:'detal',component:DetailComponent},
  {path:'home',component:WrapsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
