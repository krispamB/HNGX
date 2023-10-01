import { Module } from '@nestjs/common';
import { TranscriptionService } from './transcription.service';
import { BullModule } from '@nestjs/bull';
import { TranscriptionConsumer } from './transcription.consumer';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [TranscriptionService, TranscriptionConsumer],
  exports: [TranscriptionService, TranscriptionConsumer],
  imports: [
    BullModule.registerQueue({
      name: 'transcription',
    }),
    HttpModule
  ],
})
export class TranscriptionModule {}
