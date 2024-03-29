import { Component, Input, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { HeroComponent } from "../hero/hero.component";
import { HeroesComponent } from "./heroes.component";

describe('HeroesComponent (deep tests)', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROES;

    beforeEach(() => {
        HEROES = [
            {id: 1, name: 'SpideDude', strength: 8},
            {id: 2, name: 'Wonderful Woman', strength: 24},
            {id: 3, name: 'SuperDude', strength: 55},
        ];

        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHeroes', 'deleteHero'])

        TestBed.configureTestingModule({
            declarations: [
                HeroesComponent,
                HeroComponent
              ],
            providers: [ 
                { provide: HeroService, useValue: mockHeroService } ],
            schemas: [NO_ERRORS_SCHEMA]

        })

        fixture = TestBed.createComponent(HeroesComponent);
        mockHeroService.getHeroes.and.returnValue(of(HEROES))

        fixture.detectChanges();
    });

    it('should be true', () => {
        expect(true).toBe(true);
    });
})