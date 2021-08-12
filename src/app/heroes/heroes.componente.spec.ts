import { inject } from "@angular/core";
import { async } from "@angular/core/testing";
import { of, Subscription } from "rxjs";
import { HeroService } from "../hero.service";
import { HeroesComponent } from "./heroes.component";


let component: HeroesComponent;
let HEROES;
let mockHeroService;

describe('HeroesComponent', () => {
beforeEach(() => {
    HEROES = [
        {id: 1, name: 'SpideDude', strength: 8},
        {id: 2, name: 'Wonderful Woman', strength: 24},
        {id: 3, name: 'SuperDude', strength: 55},
    ]

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    component = new HeroesComponent(mockHeroService);
})

describe('delete', () => {
    it('should remove indicated hero hero from the heroes list', () => {
        mockHeroService.deleteHero.and.returnValue(of(true));
        component.heroes = HEROES;

        component.delete(HEROES[2]);

        expect(component.heroes[2]).toBe(undefined);
    })

    it('should remove indicated hero', () => {
        mockHeroService.deleteHero.and.returnValue(of(true));
        component.heroes = HEROES;
        const id = component.heroes[2].id;
        
        component.delete(HEROES[2]);
        const find = component.heroes.find(f => f.id === id);
        expect(find).toBe(undefined);
    })

    it('should call deleteHero with correct params', () => {
        mockHeroService.deleteHero.and.returnValue(of(true));
        component.heroes = HEROES;

        component.delete(HEROES[2]);

        expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
    })

})

})