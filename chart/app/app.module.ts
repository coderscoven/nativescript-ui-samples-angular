import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { CommonDirectivesModule } from './navigation/directives/common-directives.module';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { OptionsService } from "./navigation/options/options.service";
import { ExampleItemService } from "./navigation/exampleItemService.service";
import { ExamplesListDepthComponents } from "./navigation/examples-list/examples-list.component";
import { OptionsComponent } from "./navigation/options/options.component";
import { COMMON_DIRECTIVES } from './navigation/directives';
import { routing } from "./app.routing";
import { AppComponent } from "./navigation/app.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        CommonDirectivesModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        routing
    ],
    exports: [
        NativeScriptModule,
        NativeScriptRouterModule
    ],
    declarations: [
        AppComponent,
        ExamplesListDepthComponents,
        OptionsComponent,
    ],
    providers: [
        OptionsService,
        ExampleItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
