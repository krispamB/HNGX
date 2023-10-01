import { Module } from '@nestjs/common';
import { VideoController } from './video.controller';
import { VideoService } from './video.service';
import { TranscriptionModule } from 'src/transcription/transcription.module';
import { BullModule } from '@nestjs/bull';

@Module({
  controllers: [VideoController],
  providers: [VideoService],
  imports: [
    TranscriptionModule,
    BullModule.registerQueue({
      name: 'transcription'
    })
  ],
})
export class VideoModule {}
