import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidaAgendamentoComponent } from './valida-agendamento.component';

describe('ValidaAgendamentoComponent', () => {
  let component: ValidaAgendamentoComponent;
  let fixture: ComponentFixture<ValidaAgendamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidaAgendamentoComponent]
    });
    fixture = TestBed.createComponent(ValidaAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
