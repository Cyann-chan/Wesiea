import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssointerPage } from './assointer.page';

describe('AssointerPage', () => {
  let component: AssointerPage;
  let fixture: ComponentFixture<AssointerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssointerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssointerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
