import { Test, TestingModule } from '@nestjs/testing';
import { FormFilledService } from './form-filled.service';

describe('FormFilledService', () => {
  let service: FormFilledService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormFilledService],
    }).compile();

    service = module.get<FormFilledService>(FormFilledService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
