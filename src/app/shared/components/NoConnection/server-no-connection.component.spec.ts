import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerNoConnectionComponent } from './server-no-connection.component';

describe('ServerNoConnectionComponent', () => {
  let component: ServerNoConnectionComponent;
  let fixture: ComponentFixture<ServerNoConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerNoConnectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerNoConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
