import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AiresieaPage } from './airesiea.page';

describe('AiresieaPage', () => {
  let component: AiresieaPage;
  let fixture: ComponentFixture<AiresieaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiresieaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AiresieaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
