import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BdjPage } from './bdj.page';

describe('BdjPage', () => {
  let component: BdjPage;
  let fixture: ComponentFixture<BdjPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdjPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BdjPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
