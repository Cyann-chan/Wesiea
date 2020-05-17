import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssoLavalPage } from './asso-laval.page';

describe('AssoLavalPage', () => {
  let component: AssoLavalPage;
  let fixture: ComponentFixture<AssoLavalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssoLavalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssoLavalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
