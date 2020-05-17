import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssoParisPage } from './asso-paris.page';

describe('AssoParisPage', () => {
  let component: AssoParisPage;
  let fixture: ComponentFixture<AssoParisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssoParisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssoParisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
