import { Routes, RouterModule } from '@angular/router';
import {homePageComponent} from "./homepage/homepage.component";
import {ModuleWithProviders} from "@angular/core";
import {loginPageComponent} from "./homepage/loginpage.component";
import {registerPageComponent} from "./homepage/registerpage.component";

const appRoutes: Routes = [
    { path: '', component: homePageComponent,children :[
        {path : '' , component:loginPageComponent },
        {path : 'register' , component : registerPageComponent}
    ] }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
