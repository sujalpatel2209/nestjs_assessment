import { Test, TestingModule } from '@nestjs/testing';
import { FormFilledDataController } from './form-filled-data.controller';

describe('FormFilledDataController', () => {
  let controller: FormFilledDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormFilledDataController],
    }).compile();

    controller = module.get<FormFilledDataController>(FormFilledDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
