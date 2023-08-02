import { Module } from '@nestjs/common';
import { ClaimbasedService } from './claimbased.service';
import { ClaimbasedController } from './claimbased.controller';

@Module({
  controllers: [ClaimbasedController],
  providers: [ClaimbasedService],
  exports: [ClaimbasedService],
})
export class ClaimbasedModule {}
