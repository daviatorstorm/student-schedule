import { ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { ComponentsModule } from './components/components.module';
import { LessonsService } from './shared/services/lessons.service';

describe('App component', () => {
    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let lessonService: LessonsService;

    beforeEach(() => {
        lessonService = TestBed.get(LessonsService);
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [
                AlertModule,
                RouterModule.forRoot(routes),
                ComponentsModule,
                HttpModule
            ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' },
                { provide: 'LessonsService', useValue: lessonService }
            ]
        });

        fixture = TestBed.createComponent(AppComponent);

        comp = fixture.componentInstance;

        fixture.detectChanges();

        console.log(fixture);
        console.log(comp.subjects);

        de = fixture.debugElement.query(By.css('router-outlet'));
        el = de.nativeElement;
    });

    it('should have prop lessons', () => {
        expect(el.textContent).toEqual('');
    });
});
