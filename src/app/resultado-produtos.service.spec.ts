import { TestBed } from '@angular/core/testing';

import { ResultadoProdutosService } from './resultado-produtos.service';

describe('ResultadoProdutosService', () => {
  let service: ResultadoProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultadoProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
