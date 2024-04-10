import { Test, TestingModule } from '@nestjs/testing';
import { FormFilledDataService } from './form-filled-data.service';

describe('FormFilledDataService', () => {
  let service: FormFilledDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormFilledDataService],
    }).compile();

    service = module.get<FormFilledDataService>(FormFilledDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
