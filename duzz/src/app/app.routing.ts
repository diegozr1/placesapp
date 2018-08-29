import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { DemoComponent } from './demo/demo.component';
import { LugaresComponent } from './lugares/lugares.component';
import { InicioComponent } from './inicio/inicio.component';
import { EventosComponent } from './eventos/eventos.component';
import { AcercaComponent } from './acerca/acerca.component';
import { MapaComponent } from './mapa/mapa.component';


const appRoutes: Routes = [
    { path: '', component: InicioComponent},
    { path: 'demo', component: DemoComponent},
    { path: 'lugares', component: LugaresComponent},
    { path: 'acerca', component: AcercaComponent},
    { path: 'eventos', component: EventosComponent},
    { path: 'mapa', component: MapaComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
