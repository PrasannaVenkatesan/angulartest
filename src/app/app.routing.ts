import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';

const appRouts: Routes=[
    {
        path:'',
        component: HomeComponent 
    }
    ,
     {
        path:'app-home',
        component: HomeComponent
    }
]

export const routing: ModuleWithProviders= RouterModule.forRoot(appRouts);


