import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './Routing';

@NgModule({
  imports: [RouterModule.forRoot(routes, {
     useHash:true,
    scrollPositionRestoration: 'enabled',
    anchorScrolling:"enabled",
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


