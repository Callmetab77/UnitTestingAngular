import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroComponent } from "./hero.component"

describe('HeroComponent (shallow tests)', ()=>{

  let fixture: ComponentFixture<HeroComponent>;
  beforeEach(() => {
    //TestBed allow you to test both UI and Component
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    //NO_ERRORS_SCHEMA will make the testing don't validate the template
    fixture = TestBed.createComponent(HeroComponent);
  })

  it('should have the correct hero', () => {
    fixture.componentInstance.hero = {
      id: 1,
      name: 'superDude',
      strength: 3
    }

    //sample to detect changes fixture.detectChanges();
    expect(fixture.componentInstance.hero.name).toEqual('superDude')
  })

  it('should render the hero name in an anchor tag', () => {
    fixture.componentInstance.hero = {
      id: 2,
      name: 'superDude2',
      strength: 4
    }

    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('a').textContent).toContain('superDude2')
  })
})
