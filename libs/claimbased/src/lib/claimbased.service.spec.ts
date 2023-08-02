import { Test, TestingModule } from '@nestjs/testing';
import { ClaimbasedService } from './claimbased.service';

describe('ClaimbasedService', () => {
  let service: ClaimbasedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClaimbasedService],
    }).compile();

    service = module.get<ClaimbasedService>(ClaimbasedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
