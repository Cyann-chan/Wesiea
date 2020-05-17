import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DtrePage } from './dtre.page';

describe('DtrePage', () => {
  let component: DtrePage;
  let fixture: ComponentFixture<DtrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DtrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
