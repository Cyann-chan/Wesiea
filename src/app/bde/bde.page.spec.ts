import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BDEPage } from './bde.page';

describe('BDEPage', () => {
  let component: BDEPage;
  let fixture: ComponentFixture<BDEPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BDEPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BDEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
