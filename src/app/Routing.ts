import { Routes } from '@angular/router';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { ServerNoConnectionComponent } from './shared/components/NoConnection/server-no-connection.component';
import { ForbiddenComponent } from './shared/components/Forbidden/forbidden.component';
import { TreeComponent } from './Components/tree/tree.component';
//import { LoginComponent } from './views/auth/login/login.component';


export let routes: Routes = [

{path:'',redirectTo:"Tree",pathMatch:'full'},
{path:"Tree",title:"Tree",component:TreeComponent},

{path:"NoConnection",title:"No Connection",component:ServerNoConnectionComponent},
 {path:"**",title:"Notfound",component:NotfoundComponent},
 {path:"Forbidden",title:"Forbidden 403",component:ForbiddenComponent},

];


