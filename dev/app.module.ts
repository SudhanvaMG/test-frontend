import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {routing, appRoutingProviders} from "./app.routing";
import {homePageComponent} from "./homepage/homepage.component";
import {loginPageComponent} from "./homepage/loginpage.component";
import {registerPageComponent} from "./homepage/registerpage.component";


@NgModule({
    imports:      [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        homePageComponent,
        loginPageComponent,
        registerPageComponent
    ],
    providers : [
      appRoutingProviders
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
