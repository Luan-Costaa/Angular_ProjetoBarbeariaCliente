import { TestBed } from '@angular/core/testing';

import { AgendamentoServiceService } from './agendamento.service';

describe('AgendamentoServiceService', () => {
  let service: AgendamentoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendamentoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
