import{ModuleWithProviders}from  "@angular/core";
import{Routes,RouterModule, Router}from  "@angular/router";

//COMPONENTES
import {RegistrateComponent} from "./registrate/registrate.component";

const appRoutes: Routes = [

{path: '',redirectTo: 'home',pathMatch:'full'},
{path: 'registrate',component: RegistrateComponent},
]
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);