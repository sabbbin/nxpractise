import { Controller } from '@nestjs/common';
import { ClaimbasedService } from './claimbased.service';

@Controller('claimbased')
export class ClaimbasedController {
  constructor(private readonly claimbasedService: ClaimbasedService) {}
}
