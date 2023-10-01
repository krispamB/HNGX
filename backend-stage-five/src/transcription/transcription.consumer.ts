import { OnGlobalQueueActive, OnQueueActive, Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { TranscriptionService } from 'src/transcription/transcription.service';

@Processor('transcription')
export class TranscriptionConsumer {
  private logger = new Logger('redis-transcript');
  constructor(private transcriptionService: TranscriptionService) {}

  @OnGlobalQueueActive()
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }


  @Process('transcribe')
  async transcript(job: Job) {
    const person = job.data
    console.log('working')
    this.logger.log('working...');
    console.log('Background job processing', person)
  }
}
