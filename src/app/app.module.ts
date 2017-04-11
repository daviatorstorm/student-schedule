import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { Ng2BootstrapModule } from 'ngx-bootstrap';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDb } from './data/inmemory-db';

import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './shared/services/services.module';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ServicesModule,
    InMemoryWebApiModule.forRoot(InMemoryDb),
    ComponentsModule,
    Ng2BootstrapModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
