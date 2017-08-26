import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { RecipesService } from "./services/recipes.service";
import { UtilsService } from "./services/utils.service";
import { AuthService } from "./services/auth.service";

import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { HomeComponent } from "./home/home.component";
import { BluetoothComponent } from "./bluetooth/bluetooth.component";
import { CameraComponent } from "./camera/camera.component";
import { StoreComponent } from "./store/store.component";
import { RecipeSearchComponent } from "./recipe-search/recipe-search.component";

import {TNSFontIconModule, TNSFontIconService, TNSFontIconPipe, TNSFontIconPurePipe} from 'nativescript-ngx-fonticon';
//fab button
import { registerElement } from "nativescript-angular/element-registry";
registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);
registerElement("Gradient", () => require("nativescript-gradient").Gradient);

import firebase = require("nativescript-plugin-firebase");
firebase.init({
  persist: true
}).then(
  (instance) => {
    console.log("firebase.init done");
  },
  (error) => {
    console.log("firebase.init error: " + error);
  }
);


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        TNSFontIconModule.forRoot({
            'fa': 'fonts/font-awesome.css'
        })
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        BluetoothComponent,
        CameraComponent,
        RecipesComponent,
        RecipeSearchComponent,
        RecipeDetailComponent,
        StoreComponent
    ],
    providers: [
        RecipesService,
        UtilsService,
        AuthService   
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
