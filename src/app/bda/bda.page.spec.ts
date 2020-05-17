import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BdaPage } from './bda.page';

describe('BdaPage', () => {
  let component: BdaPage;
  let fixture: ComponentFixture<BdaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BdaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
