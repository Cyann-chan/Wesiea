import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BdsPage } from './bds.page';

describe('BdsPage', () => {
  let component: BdsPage;
  let fixture: ComponentFixture<BdsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BdsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
