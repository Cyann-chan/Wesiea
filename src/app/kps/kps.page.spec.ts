import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KpsPage } from './kps.page';

describe('KpsPage', () => {
  let component: KpsPage;
  let fixture: ComponentFixture<KpsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KpsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
