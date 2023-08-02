import { Test, TestingModule } from '@nestjs/testing';
import { ClaimbasedController } from './claimbased.controller';
import { ClaimbasedService } from './claimbased.service';

describe('ClaimbasedController', () => {
  let controller: ClaimbasedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClaimbasedController],
      providers: [ClaimbasedService],
    }).compile();

    controller = module.get<ClaimbasedController>(ClaimbasedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
