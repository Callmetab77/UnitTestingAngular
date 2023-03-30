import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component"

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      {
        id:1,
        name: 'Sexy Spidey',
        strength: 8
      },
      {
        id:2,
        name: 'Old Spidey',
        strength: 24
      },
      {
        id:3,
        name: 'Old Sexy',
        strength: 55
      }
    ]

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])

    component = new HeroesComponent(mockHeroService);
  })

  describe('delete', () =>{
    it ('it shoud remove a hero in a hero list', () => {
      //telling the delete hero method to return observable becaus in .ts, it has subscribe
      //
      mockHeroService.deleteHero.and.returnValue(of(true));

      //RANGE
      component.heroes = HEROES;
      console.log('LENGTH OF HEROES after init', component.heroes.length)
      //ACT
      component.delete(HEROES[2]);
      console.log('LENGTH OF HEROES after deletion', component.heroes.length)


      //EXPECT
      expect(component.heroes.length).toBe(2);


      console.log('Value of heroes', component.heroes)
    })
  })


})
