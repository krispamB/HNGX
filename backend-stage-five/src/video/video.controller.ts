import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { VideoService } from './video.service';
import { InitiateVideoDto } from './dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Controller('video')
export class VideoController {
  constructor(
    private videoService: VideoService,
    @InjectQueue('transcription') private readonly transcriptionQueue: Queue,
  ) {}
  @Post()
  initiateVideo(@Body() dto: InitiateVideoDto) {
    return this.videoService.initiateVideo(dto);
  }

  @Patch('append/:id')
  @UseInterceptors(FileInterceptor('video'))
  appendVideo(
    @UploadedFile() videoFile: Express.Multer.File,
    @Param('id') videoId: string,
  ) {
    return this.videoService.appendVideo(videoFile, videoId);
  }

  @Patch('end/:id')
  async test(@Param('id') videoId: string) {
    return this.videoService.endVideo(videoId);
  }
}
