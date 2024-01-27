import { Module } from '@nestjs/common';
import { MockstagramService } from './mockstagram.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports:[HttpModule],
  providers: [MockstagramService]
})
export class MockstagramModule {}
