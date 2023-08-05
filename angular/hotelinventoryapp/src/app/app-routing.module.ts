import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompRoute1Component } from './comp-route1/comp-route1.component';
import { JunkComponent } from './junk/junk.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CompRoutewithsub2Component } from './comp-routewithsub2/comp-routewithsub2.component';
import { JunkGuard } from './guards/junk.guard';

const routes: Routes = [
  
  {path: 'route1', title: 'Route 1 Component', component: CompRoute1Component},
  {path: 'route2/sub', redirectTo: 'route2/sub/', pathMatch: 'full'},
  {path: 'route2/sub/:val', title: 'Route 2 Component', component: CompRoutewithsub2Component},
  {path: 'route2/sub/:val1/:val2', title: 'Route 2 Component', component: CompRoutewithsub2Component},
  {path: 'junk', title: 'Junk Component', component: JunkComponent, canActivate: [JunkGuard]},
  {path: 'expenses', loadChildren: () => import("./expenditure/expenditure.module").then((module) => module.ExpenditureModule)},
  { path: 'expense-reporting', loadChildren: () => import('./expensereporting/expensereporting.module').then(m => m.ExpensereportingModule) },
  {path: '', redirectTo: 'route1', pathMatch: 'full'},

  {path: '**', title: '404', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
